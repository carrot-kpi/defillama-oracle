import type {
    OracleRemoteCreationFormProps,
    OracleRemotePageProps,
} from "@carrot-kpi/react";
import { ChainId } from "@carrot-kpi/sdk";
import type { SelectOption } from "@carrot-kpi/ui";
import type { Dayjs } from "dayjs";
import type { Address } from "viem";

export interface State {
    timestamp?: number;
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
    };
};

export interface PayloadFormProps {
    t: OracleRemoteCreationFormProps<State>["t"];
    kpiToken: OracleRemoteCreationFormProps<State>["kpiToken"];
    payload?: Partial<Specification["payload"]>;
    onChange: (payload: Specification["payload"]) => void;
}

export interface DecodedOracleData {
    answerer: Address;
    specificationCid: string;
    measurementTimestamp: Dayjs;
    result: bigint;
}

export interface MetricPageProps extends OracleRemotePageProps {
    specification: Specification;
    decodedOracleData: DecodedOracleData;
}
