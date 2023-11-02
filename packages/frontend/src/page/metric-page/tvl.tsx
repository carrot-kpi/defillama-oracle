import {
    FeedbackBox,
    RemoteLogo,
    Skeleton,
    Typography,
    type FeedbackBoxProps,
} from "@carrot-kpi/ui";
import { type MetricPageProps } from "../types";
import { type ProtocolOption } from "../../types";
import { InfoBox } from "../components/info-box";
import { useDefiLlamaProtocols } from "../../hooks/useDefiLlamaProtocols";
import { useEffect, useMemo, useState } from "react";
import { getDefiLlamaLink } from "../utils/defillama";
import External from "../icons/external";
import { formatDecimals } from "@carrot-kpi/sdk";
import { useDefiLlamaCurrentTvl } from "../../hooks/useDefiLlamaCurrentTvl";
import { formatUnits } from "viem";
import { useGoalCompletionPercentage } from "../hooks/useGoalCompletionPercentage";
import { Trans } from "react-i18next";
import { ConstraintType } from "../../types";

const GOAL_DESCRIPTION: {
    [C in ConstraintType]: {
        pending: string;
        finalized: {
            success: string;
            fail: string;
        };
    };
} = {
    [ConstraintType.EQUAL]: {
        pending: "goal.single.equal.description",
        finalized: {
            success: "goal.single.equal.finalized.success.description",
            fail: "goal.single.equal.finalized.fail.description",
        },
    },
    [ConstraintType.NOT_EQUAL]: {
        pending: "goal.single.notEqual.description",
        finalized: {
            success: "goal.single.notEqual.finalized.success.description",
            fail: "goal.single.notEqual.finalized.fail.description",
        },
    },
    [ConstraintType.GREATER_THAN]: {
        pending: "goal.single.greaterThan.description",
        finalized: {
            success: "goal.single.greaterThan.finalized.success.description",
            fail: "goal.single.greaterThan.finalized.fail.description",
        },
    },
    [ConstraintType.LOWER_THAN]: {
        pending: "goal.single.lowerThan.description",
        finalized: {
            success: "goal.single.lowerThan.finalized.success.description",
            fail: "goal.single.lowerThan.finalized.fail.description",
        },
    },
    [ConstraintType.BETWEEN]: {
        pending: "goal.ranged.between.description",
        finalized: {
            success: "goal.ranged.between.finalized.success.description",
            fail: "goal.ranged.between.finalized.fail.description",
        },
    },
    [ConstraintType.NOT_BETWEEN]: {
        pending: "goal.ranged.notBetween.description",
        finalized: {
            success: "goal.ranged.notBetween.finalized.success.description",
            fail: "goal.ranged.notBetween.finalized.fail.description",
        },
    },
    [ConstraintType.RANGE]: {
        pending: "goal.ranged.range.description",
        finalized: {
            success: "goal.ranged.range.finalized.success.description",
            fail: "goal.ranged.range.finalized.fail.description",
        },
    },
};

export const TvlPage = ({
    t,
    oracle,
    specification,
    decodedOracleData,
}: MetricPageProps) => {
    const { loading: loadingProtocols, protocols } = useDefiLlamaProtocols();
    const { loading: loadingTvl, tvl } = useDefiLlamaCurrentTvl(
        specification.payload.protocol,
    );

    const finalized = oracle?.finalized;
    const { result, value0, value1, constraint, measurementTimestamp } =
        decodedOracleData;

    const goalCompletionPercentage = useGoalCompletionPercentage({
        constraint,
        result: finalized
            ? parseFloat(formatUnits(result, 18))
            : parseFloat(tvl),
        value0: parseFloat(formatUnits(value0, 18)),
        value1: parseFloat(formatUnits(value1, 18)),
    });

    const [resolvedProtocol, setResolvedProtocol] =
        useState<ProtocolOption | null>(null);

    useEffect(() => {
        if (loadingProtocols) return;
        setResolvedProtocol(
            protocols.find(
                (protocol) => protocol.value === specification.payload.protocol,
            ) || null,
        );
    }, [loadingProtocols, protocols, specification.payload.protocol]);

    const feedbackBoxStatus: FeedbackBoxProps["variant"] = useMemo(() => {
        if (!finalized) return "info";
        return goalCompletionPercentage === 0 ? "warning" : "success";
    }, [finalized, goalCompletionPercentage]);

    return (
        <>
            <div className="flex flex-col md:flex-row border-b border-black dark:border-white">
                <div className="w-full flex">
                    <InfoBox
                        label={t("tracked.protocol")}
                        className={{
                            root: "border-b md:border-r md:border-b-0 border-black dark:border-white",
                        }}
                    >
                        {loadingProtocols || !resolvedProtocol ? (
                            <Skeleton width="100px" />
                        ) : (
                            <div className="flex gap-2 items-center">
                                <RemoteLogo
                                    defaultText={resolvedProtocol.label}
                                    src={resolvedProtocol.logoURL}
                                />
                                <Typography>
                                    {resolvedProtocol.label}
                                </Typography>
                            </div>
                        )}
                    </InfoBox>
                </div>
                <div className="w-full flex">
                    <InfoBox
                        label={
                            finalized ? t("final.value") : t("current.value")
                        }
                        className={{
                            root: "border-b md:border-r md:border-b-0 border-black dark:border-white",
                        }}
                    >
                        {loadingTvl ? (
                            <Skeleton width="100px" />
                        ) : (
                            <Typography>
                                {finalized
                                    ? formatDecimals({
                                          number: formatUnits(result, 18),
                                          decimalsAmount: 2,
                                      })
                                    : formatDecimals({
                                          number: tvl,
                                          decimalsAmount: 2,
                                      })}
                            </Typography>
                        )}
                    </InfoBox>
                </div>
                <div className="w-full flex">
                    <InfoBox label={t("oracle.link")}>
                        <a
                            className="flex gap-1 items-center"
                            href={getDefiLlamaLink(
                                specification.payload.protocol,
                                "tvl",
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Typography>DefiLlama</Typography>
                            <External className="w-4 h-4 cursor-pointer" />
                        </a>
                    </InfoBox>
                </div>
            </div>
            <div className="flex flex-col md:flex-row border-b border-black dark:border-white p-6">
                <FeedbackBox
                    messages={{ title: t("goal.summary.title") }}
                    variant={feedbackBoxStatus}
                    className={{ root: "max-w-2xl" }}
                >
                    {finalized ? (
                        <>
                            <Typography>
                                <Trans
                                    i18nKey={
                                        goalCompletionPercentage === 0
                                            ? "goal.summary.finalized.fail"
                                            : "goal.summary.finalized.success"
                                    }
                                    components={{
                                        strong: <strong />,
                                    }}
                                    values={{
                                        result: formatDecimals({
                                            number: formatUnits(result, 18),
                                            decimalsAmount: 2,
                                        }),
                                        measurementTime:
                                            measurementTimestamp.format(
                                                "L HH:mm:ss",
                                            ),
                                        goalDescription: t(
                                            GOAL_DESCRIPTION[constraint]
                                                .finalized[
                                                goalCompletionPercentage === 0
                                                    ? "fail"
                                                    : "success"
                                            ],
                                            {
                                                value0: formatDecimals({
                                                    number: formatUnits(
                                                        value0,
                                                        18,
                                                    ),
                                                    decimalsAmount: 2,
                                                }),
                                                value1: formatDecimals({
                                                    number: formatUnits(
                                                        value1,
                                                        18,
                                                    ),
                                                    decimalsAmount: 2,
                                                }),
                                            },
                                        ),
                                    }}
                                />
                            </Typography>
                        </>
                    ) : (
                        <Typography>
                            <Trans
                                i18nKey="goal.summary.base"
                                components={{
                                    strong: <strong />,
                                }}
                                values={{
                                    metric: t("goal.metric.tvl"),
                                    goalDescription: t(
                                        GOAL_DESCRIPTION[constraint].pending,
                                        {
                                            value0: formatDecimals({
                                                number: formatUnits(value0, 18),
                                                decimalsAmount: 2,
                                            }),
                                            value1: formatDecimals({
                                                number: formatUnits(value1, 18),
                                                decimalsAmount: 2,
                                            }),
                                        },
                                    ),
                                    measurementTime:
                                        measurementTimestamp.format(
                                            "L HH:mm:ss",
                                        ),
                                }}
                            />
                        </Typography>
                    )}
                </FeedbackBox>
            </div>
            <div className="flex flex-col md:flex-row">
                {finalized ? (
                    <InfoBox label={t("goal.final.status")}>
                        <Typography uppercase>
                            {goalCompletionPercentage === 0
                                ? t("goal.final.status.failed")
                                : t("goal.final.status.reached")}{" "}
                            {formatDecimals({
                                number: goalCompletionPercentage.toString(),
                                decimalsAmount: 2,
                            })}
                            {"%"}
                        </Typography>
                    </InfoBox>
                ) : (
                    <InfoBox label={t("goal.current.status")}>
                        <Typography uppercase>
                            {goalCompletionPercentage === 0
                                ? t("goal.current.status.failing")
                                : t("goal.current.status.succeeding")}{" "}
                            {formatDecimals({
                                number: goalCompletionPercentage.toString(),
                                decimalsAmount: 2,
                            })}
                            {"%"}
                        </Typography>
                    </InfoBox>
                )}
            </div>
        </>
    );
};
