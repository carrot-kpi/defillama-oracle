import {
    Chip,
    FeedbackBox,
    RemoteLogo,
    Skeleton,
    Typography,
} from "@carrot-kpi/ui";
import {
    ConstraintType,
    Metric,
    type MetricPageProps,
    type ProtocolOption,
} from "../../types";
import { InfoBox } from "../components/info-box";
import { useDefiLlamaProtocols } from "../../hooks/useDefiLlamaProtocols";
import { useEffect, useState } from "react";
import { getDefiLlamaLink } from "../utils/defillama";
import External from "../icons/external";
import { formatDecimals } from "@carrot-kpi/sdk";
import { useDefiLlamaCurrentTvl } from "../../hooks/useDefiLlamaCurrentTvl";
import { formatUnits } from "viem";
import { useGoalCompletionPercentage } from "../hooks/useGoalCompletionPercentage";

const GOAL_DESCRIPTION: {
    [C in ConstraintType]: string;
} = {
    [ConstraintType.EQUAL]: "label.summary.single.value.equal",
    [ConstraintType.NOT_EQUAL]: "label.summary.single.value.notEqual",
    [ConstraintType.GREATER_THAN]: "label.summary.single.value.greaterThan",
    [ConstraintType.LOWER_THAN]: "label.summary.single.value.lowerThan",
    [ConstraintType.BETWEEN]: "goal.ranged.between.description",
    [ConstraintType.NOT_BETWEEN]: "label.summary.single.value.lowerThan",
    [ConstraintType.RANGE]: "label.summary.single.value.lowerThan",
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
        result,
        value0,
        value1,
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

    return (
        <>
            <div className="flex flex-col md:flex-row border-b border-black dark:border-white">
                <div className="w-full flex">
                    <InfoBox
                        label={t("tracked.protocol")}
                        className={{
                            root: "border-r border-black dark:border-white",
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
                        label={t("metric")}
                        className={{
                            root: "border-r border-black dark:border-white",
                        }}
                    >
                        <Typography>{t("metric.tvl")}</Typography>
                    </InfoBox>
                </div>
                <div className="w-full flex">
                    <InfoBox label={t("oracle.link")}>
                        <a
                            className="flex gap-1 items-center"
                            href={getDefiLlamaLink(
                                specification.payload.protocol,
                                Metric.TVL,
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
            <div className="flex flex-col md:flex-row border-b border-black dark:border-white">
                <div className="w-full flex">
                    <InfoBox
                        label={
                            finalized ? t("final.value") : t("current.value")
                        }
                        className={{
                            root: "border-r border-black dark:border-white",
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
                    <InfoBox label={t("finalization.time")}>
                        <Typography>
                            {measurementTimestamp.format("L HH:mm:ss")}
                        </Typography>
                    </InfoBox>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full flex flex-col gap-3 p-6">
                    <Typography>
                        {t("constraint.type")}
                        <strong>
                            {ConstraintType[constraint].replace("_", " ")}
                        </strong>
                    </Typography>
                    {value1 !== 0n ? (
                        <>
                            <Typography>
                                {t("constraint.value0.ranged")}
                                <strong>
                                    {formatDecimals({
                                        number: formatUnits(value0, 18),
                                        decimalsAmount: 2,
                                    })}
                                </strong>
                            </Typography>
                            <Typography>
                                {t("constraint.value1.ranged")}
                                <strong>
                                    {formatDecimals({
                                        number: formatUnits(value1, 18),
                                        decimalsAmount: 2,
                                    })}
                                </strong>
                            </Typography>
                        </>
                    ) : (
                        <Typography>
                            {t("constraint.value0.single")}
                            <strong>
                                {formatDecimals({
                                    number: formatUnits(value0, 18),
                                    decimalsAmount: 2,
                                })}
                            </strong>
                        </Typography>
                    )}
                    <FeedbackBox variant="info">
                        <Typography>
                            {t("goal.summary.base", {
                                metric: t("goal.metric.tvl"),
                                goalDescription: t(
                                    GOAL_DESCRIPTION[constraint],
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
                                    measurementTimestamp.format("L HH:mm:ss"),
                            })}
                        </Typography>
                    </FeedbackBox>
                    <div>
                        <Typography>{t("goal.current.status")}</Typography>
                        <Chip>
                            {goalCompletionPercentage === 0n
                                ? t("goal.current.status.failing")
                                : t("goal.current.status.succeeding")}
                        </Chip>
                        <Chip>
                            {formatDecimals({
                                number: formatUnits(
                                    goalCompletionPercentage,
                                    0,
                                ),
                                decimalsAmount: 2,
                            })}
                            {"%"}
                        </Chip>
                    </div>
                </div>
            </div>
        </>
    );
};
