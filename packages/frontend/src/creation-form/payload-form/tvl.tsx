import { useEffect, useState } from "react";
import { type PayloadFormProps } from "../../types";
import {
    useDefiLlamaProtocols,
    type ProtocolOption,
} from "../../hooks/useDefiLlamaProtocols";
import { Select } from "@carrot-kpi/ui";

export const TvlPayloadForm = ({ t, payload, onChange }: PayloadFormProps) => {
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
                    value={protocol}
                />
            </div>
        </div>
    );
};
