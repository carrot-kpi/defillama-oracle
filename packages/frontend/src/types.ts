import type { OracleRemoteCreationFormProps } from "@carrot-kpi/react";
import { ChainId } from "@carrot-kpi/sdk";
import type { SelectOption } from "@carrot-kpi/ui";

export interface State {
    specification: Partial<Specification>;
}

export enum SupportedChainId {
    GNOSIS = ChainId.GNOSIS,
    SEPOLIA = ChainId.SEPOLIA,
}

export enum Metric {
    TVL = "tvl",
}

export type MetricOption = SelectOption<Metric>;

export type Specification = {
    metric: "tvl";
    payload: {
        protocol: string;
        timestamp: number;
    };
};

export interface PayloadFormProps {
    t: OracleRemoteCreationFormProps<State>["t"];
    kpiToken: OracleRemoteCreationFormProps<State>["kpiToken"];
    payload?: Partial<Specification["payload"]>;
    onChange: (payload: Specification["payload"]) => void;
}
