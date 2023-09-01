import "../global.css";
import "@carrot-kpi/ui/styles.css";

import { type ReactElement, useState, useEffect } from "react";
import {
    useDecentralizedStorageUploader,
    type OracleRemoteCreationFormProps,
    type OracleInitializationBundleGetter,
} from "@carrot-kpi/react";
import { Select, Typography } from "@carrot-kpi/ui";
import { type MetricOption, type Specification, type State } from "../types";
import { DEFILLAMA_ANSWERER_URL, METRICS } from "../commons";
import { PayloadForm } from "./payload-form";
import { encodeAbiParameters } from "viem";

export const Component = ({
    state,
    onChange,
    t,
    kpiToken,
}: OracleRemoteCreationFormProps<State>): ReactElement => {
    const uploadToIpfs = useDecentralizedStorageUploader();

    const [metric, setMetric] = useState<MetricOption | undefined>(
        METRICS.find((metric) => metric.value === state.specification?.metric),
    );
    const [payload, setPayload] = useState<
        Specification["payload"] | undefined
    >(state.specification?.payload);

    // this effect reacts to any change in internal state, firing an
    // onChange event to the creation form when necessary.
    // onChange will also receive an initialization bundle getter function
    // when data is valid.
    useEffect(() => {
        let cancelled = false;
        const validateAndChange = async () => {
            if (!metric || !payload?.protocol || !payload.timestamp) return;

            const specification = {
                metric: metric?.value,
                payload,
            };
            const newState: State = { specification };

            let valid = false;
            try {
                const response = await fetch(
                    `${DEFILLAMA_ANSWERER_URL}/specifications/validations`,
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

            let initializationBundleGetter:
                | OracleInitializationBundleGetter
                | undefined = undefined;
            if (valid) {
                initializationBundleGetter = async () => {
                    const specificationCid = await uploadToIpfs(
                        JSON.stringify(specification),
                    );
                    const initializationData = encodeAbiParameters(
                        [{ type: "string", name: "specification" }],
                        [specificationCid],
                    );
                    return {
                        data: initializationData,
                        value: 0n,
                    };
                };
            }

            if (!cancelled) onChange(newState, initializationBundleGetter);
        };
        validateAndChange();
        return () => {
            cancelled = true;
        };
    }, [metric, onChange, payload, uploadToIpfs]);

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-4">
                <div className="w-full">
                    <Select
                        id="metric"
                        className={{
                            root: "w-full",
                            input: "w-full",
                            inputWrapper: "w-full",
                        }}
                        label={t("label.metric")}
                        info={
                            <Typography variant="sm">
                                {t("info.metric")}
                            </Typography>
                        }
                        placeholder={t("placeholder.pick")}
                        onChange={setMetric}
                        options={METRICS}
                        value={metric || null}
                    />
                </div>
                <PayloadForm
                    metric={metric?.value}
                    payload={payload}
                    onChange={setPayload}
                    kpiToken={kpiToken}
                    t={t}
                />
            </div>
        </div>
    );
};
