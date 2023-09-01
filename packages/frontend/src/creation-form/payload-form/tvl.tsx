import { useCallback, useEffect, useState } from "react";
import { type PayloadFormProps } from "../../types";
import {
    useDefiLlamaProtocols,
    type ProtocolOption,
} from "../../hooks/useDefiLlamaProtocols";
import { DateTimeInput, Select, Typography } from "@carrot-kpi/ui";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const TvlPayloadForm = ({
    t,
    kpiToken,
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
    const [timestamp, setTimestamp] = useState<Dayjs | null>(
        payload?.timestamp ? dayjs(payload?.timestamp) : null,
    );
    const [minimumDate, setMinimumDate] = useState(new Date());
    const [maximumDate, setMaximumDate] = useState(new Date());

    const [timestampErrorText, setTimestampErrorText] = useState("");

    useEffect(() => {
        if (kpiToken?.expiration)
            setMaximumDate(dayjs.unix(kpiToken.expiration).toDate());
        const interval = setInterval(() => {
            setMinimumDate(new Date());
        }, 1_000);
        return () => {
            clearInterval(interval);
        };
    }, [kpiToken?.expiration]);

    useEffect(() => {
        setTimestampErrorText(
            timestamp &&
                (timestamp.isAfter(maximumDate) ||
                    timestamp.isBefore(minimumDate))
                ? t("error.timestamp.invalid")
                : "",
        );
    }, [maximumDate, minimumDate, t, timestamp]);

    useEffect(() => {
        if (!protocol || !timestamp || timestampErrorText) return;
        onChange({
            protocol: protocol.value,
            timestamp: timestamp.unix(),
        });
    }, [onChange, protocol, timestamp, timestampErrorText]);

    const handleTimestampChange = useCallback((value: Date) => {
        setTimestamp(dayjs(value));
    }, []);

    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-1/2">
                <Select
                    id="protocol"
                    className={{
                        root: "w-full",
                        input: "w-full",
                        inputWrapper: "w-full",
                    }}
                    label={t("label.tvl.protocol")}
                    placeholder={t("placeholder.pick")}
                    loading={loading}
                    onChange={setProtocol}
                    options={protocols}
                    value={protocol}
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
                    label={t("label.tvl.timestamp")}
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
    );
};
