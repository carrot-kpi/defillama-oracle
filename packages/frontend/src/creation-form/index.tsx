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
    type OracleInitializationBundleGetter,
    useDevMode,
    useStagingMode,
} from "@carrot-kpi/react";
import { Chip, DateTimeInput, Select, Typography } from "@carrot-kpi/ui";
import {
    type ConstraintTypeOption,
    type MetricOption,
    type Specification,
    type State,
} from "../types";
import { CONSTRAINT_TYPES, METRICS } from "../commons";
import { PayloadForm } from "./payload-form";
import { encodeAbiParameters } from "viem";
import dayjs, { Dayjs } from "dayjs";
import { useTimeConstraints } from "../hooks/useTimeConstraints";
import { ConstraintForm } from "./constraint-values-form";
import localizedFormat from "dayjs/plugin/localizedFormat";
import useDebounce from "react-use/esm/useDebounce";

dayjs.extend(localizedFormat);

export const Component = ({
    state,
    onChange,
    t,
    kpiToken,
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

    const [timestamp, setTimestamp] = useState<Dayjs | null>(
        state?.timestamp ? dayjs.unix(state.timestamp) : null,
    );
    const [minimumDate, setMinimumDate] = useState<Date | null>(null);
    const [maximumDate, setMaximumDate] = useState<Date | null>(null);

    const [timestampErrorText, setTimestampErrorText] = useState("");

    const [metric, setMetric] = useState<MetricOption | undefined>(
        METRICS.find((metric) => metric.value === state.specification?.metric),
    );
    const [payload, setPayload] = useState<
        Specification["payload"] | undefined
    >(state.specification?.payload);
    const [validSpecification, setValidSpecification] =
        useState<Specification | null>(null);

    const [constraintType, setConstraintType] = useState<
        ConstraintTypeOption | undefined
    >(
        CONSTRAINT_TYPES.find(
            (constraintType) => constraintType.value === state.constraint?.type,
        ),
    );
    const [constraintValuesValid, setConstraintValuesValid] = useState(false);
    const [constraintValues, setConstraintValues] = useState<
        [bigint | undefined, bigint | undefined]
    >([state.constraint?.value0, state.constraint?.value1]);

    useEffect(() => {
        console.log("effect_1", {
            expirationBufferTime,
            expiration: kpiToken?.expiration,
            minimumTimeElapsed,
        });
        if (kpiToken?.expiration) {
            const maximumDate = expirationBufferTime
                ? dayjs
                      .unix(kpiToken.expiration)
                      .subtract(Number(expirationBufferTime), "seconds")
                : dayjs.unix(kpiToken.expiration);

            setMaximumDate(maximumDate.toDate());
            if (maximumDate && dayjs(maximumDate).isBefore(dayjs())) return;
        }
        const interval = setInterval(() => {
            console.log("interval");
            const minimumDate = minimumTimeElapsed
                ? dayjs().add(Number(minimumTimeElapsed), "seconds")
                : dayjs();
            setMinimumDate(minimumDate.toDate());
        }, 1_000);
        return () => {
            clearInterval(interval);
        };
    }, [expirationBufferTime, kpiToken?.expiration, minimumTimeElapsed, t]);

    useEffect(() => {
        console.log("effect 2", state.timestamp);
        if (!state.timestamp) return;
        setTimestamp(dayjs.unix(state.timestamp));
    }, [state.timestamp]);

    useEffect(() => {
        if (
            kpiToken?.expiration &&
            maximumDate &&
            dayjs(maximumDate).isBefore(dayjs())
        ) {
            setTimestampErrorText(
                t("error.maximum.date.past", {
                    minimumDate: dayjs
                        .unix(kpiToken.expiration)
                        .add(Number(expirationBufferTime), "seconds")
                        .format("L HH:mm:ss"),
                }),
            );
            return;
        }
        setTimestampErrorText(
            timestamp &&
                (timestamp.isAfter(maximumDate) ||
                    timestamp.isBefore(minimumDate))
                ? t("error.timestamp.invalid")
                : "",
        );
    }, [
        expirationBufferTime,
        kpiToken?.expiration,
        maximumDate,
        minimumDate,
        t,
        timestamp,
    ]);

    console.log("maximum date", { maximumDate });

    useDebounce(
        () => {
            // FIXME: there's a potential risk of race conditions
            const validate = async () => {
                // FIXME: in the following check we're verifying that the protocol
                // is there in the payload, but this is a spec-specific check that should be
                // implemented elsewhere, as this component should be completely
                // spec-agnostic
                if (
                    !metric ||
                    !timestamp ||
                    !constraintType ||
                    constraintValues[0] === undefined ||
                    constraintValues[1] === undefined ||
                    !payload?.protocol
                )
                    return;

                const specification = {
                    metric: metric?.value,
                    payload,
                };

                let valid = false;
                try {
                    const response = await fetch(
                        `${answererUrl}/specifications/validations`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(specification),
                        },
                    );
                    valid = response.ok;
                } catch (error) {
                    console.error(
                        "an error occurred while checking for spec validity",
                        error,
                    );
                }

                setValidSpecification(valid ? specification : null);
            };
            validate();
        },
        300,
        [metric, timestamp, constraintType, constraintValues, payload],
    );

    // this effect reacts to any change in internal state, firing an
    // onChange event to the creation form when necessary.
    // onChange will also receive an initialization bundle getter function
    // when data is valid.
    useEffect(() => {
        console.log("effect 4", {
            constraintType,
            constraintValuesValid,
            constraintValues,
            metric: metric?.value,
            onChange,
            payload,
            timestamp,
            uploadToIpfs,
            validSpecification,
        });
        let initializationBundleGetter:
            | OracleInitializationBundleGetter
            | undefined = undefined;
        if (
            !!validSpecification &&
            !!timestamp &&
            !!constraintType &&
            constraintValuesValid
        ) {
            console.log("init bundle getter");
            initializationBundleGetter = async () => {
                const specificationCid = await uploadToIpfs(
                    JSON.stringify(validSpecification),
                );
                const initializationData = encodeAbiParameters(
                    [
                        { type: "string", name: "specification" },
                        { type: "uint256", name: "measurementTimestamp" },
                        { type: "uint256", name: "constraint" },
                        { type: "uint256", name: "value0" },
                        { type: "uint256", name: "value1" },
                    ],
                    [
                        specificationCid,
                        BigInt(timestamp.unix()),
                        BigInt(Number(constraintType.value)),
                        constraintValues[0] || 0n,
                        constraintValues[1] || 0n,
                    ],
                );
                return {
                    data: initializationData,
                    value: 0n,
                };
            };
        }

        const newState: State = {
            timestamp: timestamp?.unix(),
            constraint: {
                type: constraintType?.value,
                value0: constraintValues[0],
                value1: constraintValues[1],
            },
            specification: {
                metric: metric?.value,
                payload,
            },
        };
        onChange(newState, initializationBundleGetter);
    }, [
        constraintType,
        constraintValuesValid,
        constraintValues,
        metric?.value,
        onChange,
        payload,
        timestamp,
        uploadToIpfs,
        validSpecification,
    ]);

    const handleTimestampChange = useCallback((value: Date) => {
        setTimestamp(dayjs(value));
    }, []);

    const handleValuesChange = useCallback(
        (values: [bigint | undefined, bigint | undefined], valid: boolean) => {
            setConstraintValues(values);
            setConstraintValuesValid(valid);
        },
        [],
    );

    console.log("external", state);

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
                            onChange={setMetric}
                            options={METRICS}
                            value={metric || null}
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
                            disabled={
                                !!(
                                    maximumDate &&
                                    dayjs(maximumDate).isBefore(dayjs())
                                )
                            }
                            loading={loadingTimeConstraints}
                            label={t("label.timestamp")}
                            placeholder={t("placeholder.tvl.timestamp")}
                            min={minimumDate}
                            max={maximumDate}
                            onChange={handleTimestampChange}
                            value={timestamp?.toDate()}
                            error={!!timestampErrorText}
                            errorText={timestampErrorText}
                        />
                    </div>
                </div>
                <PayloadForm
                    metric={metric?.value}
                    measurementTimestamp={timestamp}
                    payload={payload}
                    onChange={setPayload}
                    kpiToken={kpiToken}
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
                                    active={constraintType?.value === ct.value}
                                    onClick={() => {
                                        setConstraintType(ct);
                                    }}
                                >
                                    {ct.label}
                                </Chip>
                            );
                        })}
                    </div>
                </div>
                <ConstraintForm
                    type={constraintType}
                    value0={constraintValues[0]}
                    value1={constraintValues[1]}
                    onChange={handleValuesChange}
                    t={t}
                />
            </div>
        </div>
    );
};
