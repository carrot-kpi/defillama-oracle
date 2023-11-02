import "../global.css";
import "@carrot-kpi/ui/styles.css";

import {
    type ReactElement,
    useState,
    useEffect,
    useCallback,
    useMemo,
} from "react";
import {
    useDecentralizedStorageUploader,
    type OracleRemoteCreationFormProps,
    useDevMode,
    useStagingMode,
} from "@carrot-kpi/react";
import { Chip, DateTimeInput, Select, Typography } from "@carrot-kpi/ui";
import {
    type Constraint,
    type MetricOption,
    type Specification,
    type State,
} from "./types";
import {
    CONSTRAINT_TYPES,
    METRICS,
    SUGGESTED_EXPIRATION_DATE_BUFFER,
} from "../commons";
import { PayloadForm } from "./payload-form";
import dayjs from "dayjs";
import { useTimeConstraints } from "../hooks/useTimeConstraints";
import { ConstraintForm } from "./constraint-values-form";
import localizedFormat from "dayjs/plugin/localizedFormat";
import useDebounce from "react-use/esm/useDebounce";
import { dateToUnixTimestamp, unixTimestampToDate } from "../utils/dates";
import { getInitializationBundleGetter } from "./utils/initialization-bundle-getter";
import type { ConstraintTypeOption } from "../types";

dayjs.extend(localizedFormat);

export const Component = ({
    state,
    onStateChange,
    onInitializationBundleGetterChange,
    onSuggestedExpirationTimestampChange,
    t,
    template,
}: OracleRemoteCreationFormProps<State>): ReactElement => {
    const uploadToIpfs = useDecentralizedStorageUploader();
    const {
        minimumTimeElapsed,
        expirationBufferTime,
        loading: loadingTimeConstraints,
    } = useTimeConstraints(template.address);
    const devMode = useDevMode();
    const stagingMode = useStagingMode();
    const answererUrl = useMemo(() => {
        return devMode
            ? "http://127.0.0.1:9080"
            : stagingMode
            ? "https://defillama-answerer.api.staging.carrot.community"
            : "https://defillama-answerer.api.carrot.community";
    }, [devMode, stagingMode]);

    const [minimumDate, setMinimumDate] = useState<Date | null>(null);
    const [timestampErrorText, setTimestampErrorText] = useState("");
    const [validSpecification, setValidSpecification] =
        useState<Specification | null>(null);

    const [constraintValuesValid, setConstraintValuesValid] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            let newMinDate = dateToUnixTimestamp(new Date());
            if (minimumTimeElapsed) newMinDate += Number(minimumTimeElapsed);
            setMinimumDate(unixTimestampToDate(newMinDate));
        }, 1_000);
        return () => {
            clearInterval(interval);
        };
    }, [minimumTimeElapsed]);

    useEffect(() => {
        let errorText = "";
        if (
            state.timestamp &&
            minimumDate &&
            state.timestamp < dateToUnixTimestamp(minimumDate)
        )
            errorText = t("error.timestamp.invalid");
        setTimestampErrorText(errorText);
    }, [expirationBufferTime, minimumDate, state.timestamp, t]);

    useDebounce(
        () => {
            // FIXME: there's a potential risk of race conditions
            const validate = async () => {
                // FIXME: in the following check we're verifying that the protocol
                // is there in the payload, but this is a spec-specific check that should be
                // implemented elsewhere, as this component should be completely
                // spec-agnostic
                if (
                    !state.timestamp ||
                    !state.specification ||
                    !state.specification.metric ||
                    !state.specification.payload ||
                    !state.constraint ||
                    !state.constraint.type ||
                    state.constraint.value0 === undefined ||
                    state.constraint.value1 === undefined ||
                    !state.specification.payload.protocol
                )
                    return;

                let valid = false;
                try {
                    const response = await fetch(
                        `${answererUrl}/specifications/validations`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(state.specification),
                        },
                    );
                    valid = response.ok;
                } catch (error) {
                    console.error(
                        "an error occurred while checking for spec validity",
                        error,
                    );
                }

                setValidSpecification(valid ? state.specification : null);
            };
            validate();
        },
        300,
        [state],
    );

    useEffect(() => {
        if (
            !validSpecification ||
            !state.timestamp ||
            !state.constraint ||
            !state.constraint.type ||
            !state.constraint.value0 ||
            !state.constraint.value1 ||
            !constraintValuesValid
        )
            return;
        onInitializationBundleGetterChange(
            getInitializationBundleGetter(
                uploadToIpfs,
                state.timestamp,
                validSpecification,
                state.constraint as Required<Constraint>,
            ),
        );
    }, [
        constraintValuesValid,
        onInitializationBundleGetterChange,
        state.constraint,
        state.timestamp,
        uploadToIpfs,
        validSpecification,
    ]);

    const handleMetricChange = useCallback(
        (value: MetricOption) => {
            onStateChange((state) => ({
                ...state,
                specification: {
                    ...(state.specification || {}),
                    metric: value.value,
                },
            }));
        },
        [onStateChange],
    );

    const handleTimestampChange = useCallback(
        (value: Date) => {
            const newTimestamp = dateToUnixTimestamp(value);
            onStateChange((state) => ({
                ...state,
                timestamp: newTimestamp,
            }));
            onSuggestedExpirationTimestampChange(
                newTimestamp + SUGGESTED_EXPIRATION_DATE_BUFFER,
            );
        },
        [onStateChange, onSuggestedExpirationTimestampChange],
    );

    const handlePayloadChange = useCallback(
        (payload: Specification["payload"]) => {
            onStateChange((state) => ({
                ...state,
                specification: {
                    ...state.specification,
                    payload,
                },
            }));
        },
        [onStateChange],
    );

    const handleConstraintTypeChange = useCallback(
        (constraintType: ConstraintTypeOption) => () => {
            onStateChange((state) => ({
                ...state,
                constraint: {
                    ...state.constraint,
                    type: constraintType.value,
                },
            }));
        },
        [onStateChange],
    );

    const handleConstraintValuesChange = useCallback(
        (values: [bigint | undefined, bigint | undefined], valid: boolean) => {
            onStateChange((state) => ({
                ...state,
                constraint: {
                    ...state.constraint,
                    value0: values[0]?.toString(),
                    value1: values[1]?.toString(),
                },
            }));
            setConstraintValuesValid(valid);
        },
        [onStateChange],
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col px-4 gap-4">
                <Typography variant="h3">
                    {t("label.tracked.metric")}
                </Typography>
                <div className="flex flex-col gap-2 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <Select
                            id="metric"
                            className={{
                                root: "w-full",
                                input: "w-full",
                                inputWrapper: "w-full",
                            }}
                            label={t("label.metric")}
                            messages={{
                                noResults: t("select.no.results"),
                            }}
                            info={
                                <Typography variant="sm">
                                    {t("info.metric")}
                                </Typography>
                            }
                            placeholder={t("placeholder.pick.metric")}
                            search
                            onChange={handleMetricChange}
                            options={METRICS}
                            value={
                                state.specification?.metric
                                    ? METRICS.find(
                                          (metric) =>
                                              metric.value ===
                                              state.specification?.metric,
                                      ) || null
                                    : null
                            }
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <DateTimeInput
                            id="timestamp"
                            info={
                                <Typography variant="sm">
                                    {t("info.timestamp")}
                                </Typography>
                            }
                            className={{
                                root: "w-full",
                                input: "w-full",
                                inputWrapper: "w-full",
                            }}
                            loading={loadingTimeConstraints}
                            label={t("label.timestamp")}
                            placeholder={t("placeholder.tvl.timestamp")}
                            min={minimumDate}
                            onChange={handleTimestampChange}
                            value={
                                state.timestamp
                                    ? unixTimestampToDate(state.timestamp)
                                    : null
                            }
                            error={!!timestampErrorText}
                            errorText={timestampErrorText}
                        />
                    </div>
                </div>
                <PayloadForm
                    metric={state.specification?.metric}
                    measurementTimestamp={state.timestamp}
                    payload={state.specification?.payload}
                    onChange={handlePayloadChange}
                    t={t}
                />
            </div>
            <hr className="border-black" />
            <div className="flex flex-col px-4 gap-4">
                <Typography variant="h3">{t("label.goal")}</Typography>
                <div className="flex flex-col gap-2 md:flex-row">
                    <div className="flex w-full flex-wrap gap-3">
                        {CONSTRAINT_TYPES.map((ct) => {
                            return (
                                <Chip
                                    key={ct.value}
                                    size="big"
                                    clickable
                                    active={ct.value === state.constraint?.type}
                                    onClick={handleConstraintTypeChange(ct)}
                                >
                                    {ct.label}
                                </Chip>
                            );
                        })}
                    </div>
                </div>
                <ConstraintForm
                    type={CONSTRAINT_TYPES.find(
                        (constraintType) =>
                            constraintType.value === state.constraint?.type,
                    )}
                    value0={
                        state.constraint?.value0
                            ? BigInt(state.constraint.value0)
                            : undefined
                    }
                    value1={
                        state.constraint?.value1
                            ? BigInt(state.constraint.value1)
                            : undefined
                    }
                    onChange={handleConstraintValuesChange}
                    t={t}
                />
            </div>
        </div>
    );
};
