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
    useJSONUploader,
    type OracleRemoteCreationFormProps,
    useDevMode,
    useTemplatePreviewMode,
} from "@carrot-kpi/react";
import { Chip, DateTimeInput, Select, Typography } from "@carrot-kpi/ui";
import {
    type Constraint,
    type MetricOption,
    type Specification,
    type State,
} from "./types";
import { CONSTRAINT_TYPES, METRICS } from "../commons";
import { PayloadForm } from "./payload-form";
import dayjs from "dayjs";
import { useTimeConstraints } from "../hooks/useTimeConstraints";
import { ConstraintForm } from "./constraint-values-form";
import localizedFormat from "dayjs/plugin/localizedFormat";
import useDebounce from "react-use/esm/useDebounce";
import { dateToUnixTimestamp, unixTimestampToDate } from "../utils/dates";
import { getInitializationBundleGetter } from "./utils/initialization-bundle-getter";
import type { ConstraintTypeOption } from "../types";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { bundle } from "./i18n";

export const DEFILLAMA_ORACLE_TEMPLATE_I18N_NAMESPACE =
    "@carrot-kpi/defillama-oracle-template";

i18next.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    ns: DEFILLAMA_ORACLE_TEMPLATE_I18N_NAMESPACE,
    defaultNS: DEFILLAMA_ORACLE_TEMPLATE_I18N_NAMESPACE,
    resources: bundle,
    interpolation: {
        escapeValue: false,
    },
});

dayjs.extend(localizedFormat);

export const Component = ({
    state,
    onStateChange,
    onInitializationBundleGetterChange,
    onSuggestedExpirationTimestampChange,
    template,
}: OracleRemoteCreationFormProps<State>): ReactElement => {
    const uploadToDataManager = useJSONUploader();
    const {
        minimumTimeElapsed,
        expirationBufferTime,
        loading: loadingTimeConstraints,
    } = useTimeConstraints(template.address);
    const { t } = useTranslation();
    const devMode = useDevMode();
    const templatePreviewMode = useTemplatePreviewMode();
    const answererUrl = useMemo(() => {
        return devMode
            ? "http://127.0.0.1:9080"
            : templatePreviewMode
              ? `https://defillama-answerer.api.${ENVIRONMENT}.carrot.community`
              : "https://defillama-answerer.api.carrot.community";
    }, [devMode, templatePreviewMode]);

    const [minimumDate, setMinimumDate] = useState<Date | null>(null);
    const [timestampErrorText, setTimestampErrorText] = useState("");
    const [validSpecification, setValidSpecification] =
        useState<Specification | null>(null);
    const [constraintValuesValid, setConstraintValuesValid] = useState(false);
    const [showAllConstraints, setShowAllConstraints] = useState(false);

    const memoizedMeasurementTimestamp = useMemo(() => {
        return state.timestamp ? unixTimestampToDate(state.timestamp) : null;
    }, [state.timestamp]);

    const activeConstraintType = useMemo(
        () =>
            CONSTRAINT_TYPES.find((ct) => ct.value === state.constraint?.type),
        [state.constraint?.type],
    );

    useEffect(() => {
        if (!!activeConstraintType && !activeConstraintType.highlighted)
            setShowAllConstraints(true);
    }, [activeConstraintType]);

    useEffect(() => {
        const interval = setInterval(() => {
            let newMinDate = dateToUnixTimestamp(new Date());
            if (minimumTimeElapsed) newMinDate += minimumTimeElapsed;
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
                    state.constraint.type === undefined ||
                    state.constraint.value0 === undefined ||
                    !state.specification.payload.protocol ||
                    !constraintValuesValid
                ) {
                    setValidSpecification(null);
                    return;
                }
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
            state.constraint.type === undefined ||
            state.constraint.value0 === undefined ||
            !constraintValuesValid
        ) {
            onInitializationBundleGetterChange(undefined);
            return;
        }
        onInitializationBundleGetterChange(
            getInitializationBundleGetter(
                uploadToDataManager,
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
        uploadToDataManager,
        validSpecification,
    ]);

    const handleMetricChange = useCallback(
        (value: MetricOption) => {
            onStateChange((state) => ({
                ...state,
                specification: {
                    ...state.specification,
                    metric: value.value,
                },
            }));
        },
        [onStateChange],
    );

    const handleTimestampChange = useCallback(
        (value: Date) => {
            const newTimestamp = dateToUnixTimestamp(value);
            if (expirationBufferTime) {
                onSuggestedExpirationTimestampChange(
                    newTimestamp + expirationBufferTime,
                );
            }
            onStateChange((state) => ({
                ...state,
                timestamp: newTimestamp,
            }));
        },
        [
            expirationBufferTime,
            onStateChange,
            onSuggestedExpirationTimestampChange,
        ],
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

    const handleShowMoreConstraintsClick = useCallback(() => {
        setShowAllConstraints((prevState) => !prevState);
    }, []);

    const handleConstraintValuesChange = useCallback(
        (values: [bigint | undefined, bigint | undefined]) => {
            onStateChange((state) => ({
                ...state,
                constraint: {
                    ...state.constraint,
                    value0: values[0]?.toString(),
                    value1: values[1]?.toString(),
                },
            }));
        },
        [onStateChange],
    );

    const handleConstraintValidChange = useCallback((valid: boolean) => {
        setConstraintValuesValid(valid);
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col px-4 gap-4">
                <Typography variant="h3">
                    {t("label.tracked.metric")}
                </Typography>
                <div className="flex flex-col gap-2 md:flex-row">
                    <div className="w-full md:w-1/2">
                        <Select
                            data-testid="creation-form-metric-select-input"
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
                            data-testid="creation-form-measurement-date-input"
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
                            value={memoizedMeasurementTimestamp}
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
                    <div
                        data-testid="creation-form-constraints"
                        className="flex w-full flex-wrap gap-3"
                    >
                        {CONSTRAINT_TYPES.map((ct) => {
                            if (!ct.highlighted && !showAllConstraints) return;
                            return (
                                <Chip
                                    data-testid={`creation-form-constraint-${ct.value}`}
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
                        <Chip
                            data-testid="creation-form-constraint-show-more"
                            size="big"
                            clickable
                            onClick={handleShowMoreConstraintsClick}
                            className={{ root: "bg-green" }}
                        >
                            {showAllConstraints
                                ? t("label.goal.showLess")
                                : t("label.goal.showMore")}
                        </Chip>
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
                    onValidChange={handleConstraintValidChange}
                    t={t}
                />
            </div>
        </div>
    );
};
