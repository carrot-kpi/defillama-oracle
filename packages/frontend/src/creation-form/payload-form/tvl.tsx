import { useCallback } from "react";
import { useDefiLlamaProtocols } from "../../hooks/useDefiLlamaProtocols";
import { FeedbackBox, Select, Typography } from "@carrot-kpi/ui";
import { ProtocolOption as ProtocolOptionComponent } from "../../commons/protocol-option";
import dayjs from "dayjs";
import type { PayloadFormProps } from "../types";
import type { ProtocolOption } from "../../types";
import { useDefiLlamaCurrentTvl } from "../../hooks/useDefiLlamaCurrentTvl";
import { formatDecimals } from "@carrot-kpi/sdk";
import { Trans } from "react-i18next";

export const TvlPayloadForm = ({
    t,
    measurementTimestamp,
    payload,
    onChange,
}: PayloadFormProps) => {
    const { loading: loadingProtocols, protocols } = useDefiLlamaProtocols();
    const { tvl } = useDefiLlamaCurrentTvl(payload?.protocol);

    const handleProtocolChange = useCallback(
        (protocolOption: ProtocolOption) => {
            onChange({ ...payload, protocol: protocolOption.value });
        },
        [onChange, payload],
    );

    const protocol =
        protocols && payload?.protocol
            ? protocols.find(
                  (protocol) => protocol.value === payload.protocol,
              ) || null
            : null;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="w-full">
                    <Select
                        id="protocol"
                        className={{
                            root: "w-full",
                            input: "w-full",
                            inputWrapper: "w-full",
                        }}
                        label={t("label.tvl.protocol")}
                        placeholder={t("placeholder.pick.protocol")}
                        loading={loadingProtocols}
                        messages={{
                            noResults: t("select.no.results"),
                        }}
                        onChange={handleProtocolChange}
                        options={protocols}
                        search
                        value={protocol}
                        renderOption={ProtocolOptionComponent}
                    />
                </div>
            </div>
            {measurementTimestamp && protocol && tvl ? (
                <FeedbackBox
                    variant="success"
                    messages={{ title: t("label.metric.summary") }}
                >
                    <Typography>
                        <Trans
                            i18nKey="metric.summary.tvl"
                            components={{
                                strong: <strong />,
                                br: <br />,
                            }}
                            values={{
                                protocol: protocol.label,
                                measurementTime: dayjs
                                    .unix(measurementTimestamp)
                                    .format("L HH:mm:ss"),
                                currentTvl: formatDecimals({
                                    number: tvl,
                                    decimalsAmount: 2,
                                }),
                            }}
                        />
                    </Typography>
                </FeedbackBox>
            ) : (
                <FeedbackBox className={{ root: "bg-gray-300" }}>
                    <Typography uppercase>
                        {t("label.metric.summary")}
                    </Typography>
                </FeedbackBox>
            )}
        </div>
    );
};
