import { useEffect, useState } from "react";
import { type PayloadFormProps, type ProtocolOption } from "../../types";
import { useDefiLlamaProtocols } from "../../hooks/useDefiLlamaProtocols";
import { Select, Typography } from "@carrot-kpi/ui";
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
            {measurementTimestamp && protocol && (
                <Typography>
                    Metric summary: total value locked in {protocol.label} on
                    date {measurementTimestamp.format("L HH:mm:ss")}
                </Typography>
            )}
        </div>
    );
};
