import { useEffect, useState } from "react";
import { type PayloadFormProps, type ProtocolOption } from "../../types";
import { useDefiLlamaProtocols } from "../../hooks/useDefiLlamaProtocols";
import { FeedbackBox, Select, Typography } from "@carrot-kpi/ui";
import { ProtocolOption as ProtocolOptionComponent } from "../../commons/protocol-option";

export const TvlPayloadForm = ({
    t,
    measurementTimestamp,
    payload,
    onChange,
}: PayloadFormProps) => {
    const { loading, protocols } = useDefiLlamaProtocols();

    const [protocol, setProtocol] = useState<ProtocolOption | null>(
        !loading && payload?.protocol
            ? protocols.find(
                  (protocol) => protocol.value === payload?.protocol,
              ) || null
            : null,
    );

    // In those cases when the component is initially rendered and loading is true,
    // the protocol will be set to null in the component's state even if it's passed
    // in the payload prop. This just makes sure when loading gets set to false and
    // the protocol is still null, that it will be set
    useEffect(() => {
        if (!protocol && !loading) {
            setProtocol(
                protocols.find(
                    (protocol) => protocol.value === payload?.protocol,
                ) || null,
            );
        }
    }, [loading, payload?.protocol, protocol, protocols]);

    useEffect(() => {
        if (!protocol) return;
        onChange({
            protocol: protocol.value,
        });
    }, [onChange, protocol]);

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
                        loading={loading}
                        messages={{
                            noResults: t("select.no.results"),
                        }}
                        onChange={setProtocol}
                        options={protocols}
                        search
                        value={protocol}
                        renderOption={ProtocolOptionComponent}
                    />
                </div>
            </div>
            {measurementTimestamp && protocol ? (
                <FeedbackBox
                    variant="info"
                    messages={{ title: t("label.metric.summary") }}
                >
                    <Typography>
                        {t("metric.summary.tvl", {
                            protocol: protocol.label,
                            measurementTime:
                                measurementTimestamp.format("L HH:mm:ss"),
                        })}
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
