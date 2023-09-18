import type {
    OracleRemoteCreationFormProps,
    OracleRemotePageProps,
} from "@carrot-kpi/react";
import { ChainId } from "@carrot-kpi/sdk";
import type { SelectOption } from "@carrot-kpi/ui";
import type { Dayjs } from "dayjs";
import type { Address } from "viem";

export enum ConstraintType {
    BETWEEN,
    NOT_BETWEEN,
    RANGE,
    GREATER_THAN,
    LOWER_THAN,
    EQUAL,
    NOT_EQUAL,
}

export interface Constraint {
    type: ConstraintType;
    value0: bigint;
    value1: bigint;
}

export interface State {
    timestamp?: number;
    constraint?: Partial<Constraint>;
    specification?: Partial<Specification>;
}

export enum SupportedChainId {
    GNOSIS = ChainId.GNOSIS,
    SEPOLIA = ChainId.SEPOLIA,
}

export enum Metric {
    TVL = "tvl",
}

export type MetricOption = SelectOption<Metric>;

export type ConstraintTypeOption = SelectOption<ConstraintType>;

export type Specification = {
    metric: "tvl";
    payload: {
        protocol: string;
    };
};

export interface PayloadFormProps {
    t: OracleRemoteCreationFormProps<State>["t"];
    kpiToken: OracleRemoteCreationFormProps<State>["kpiToken"];
    measurementTimestamp?: Dayjs | null;
    payload?: Partial<Specification["payload"]>;
    onChange: (payload: Specification["payload"]) => void;
}

export interface ConstraintFormProps {
    type?: ConstraintTypeOption;
    t: OracleRemoteCreationFormProps<State>["t"];
    value0?: bigint;
    value1?: bigint;
    onChange: (values: [bigint | undefined, bigint | undefined]) => void;
}

export interface DecodedOracleData {
    answerer: Address;
    constraint: ConstraintType;
    value0: bigint;
    value1: bigint;
    specificationCid: string;
    measurementTimestamp: Dayjs;
    result: bigint;
}

export interface MetricPageProps extends OracleRemotePageProps {
    specification: Specification;
    decodedOracleData: DecodedOracleData;
}

export interface ProtocolOption extends SelectOption<string> {
    logoURL: string;
}
