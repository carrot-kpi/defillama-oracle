import type { OracleRemoteCreationFormProps } from "@carrot-kpi/react";
import type { SelectOption } from "@carrot-kpi/ui";
import type { ConstraintType, ConstraintTypeOption, Metric } from "../types";

export interface Constraint {
    type?: ConstraintType;
    value0?: string;
    value1?: string;
}

export interface State {
    timestamp?: number;
    constraint?: Constraint;
    specification?: Specification;
}

export type MetricOption = SelectOption<Metric>;

export type Specification = {
    metric?: "tvl";
    payload?: {
        protocol?: string;
    };
};

export interface PayloadFormProps {
    t: OracleRemoteCreationFormProps<State>["t"];
    kpiToken: OracleRemoteCreationFormProps<State>["kpiToken"];
    measurementTimestamp?: number;
    payload?: Partial<Specification["payload"]>;
    onChange: (payload: Specification["payload"]) => void;
}

export interface ConstraintFormProps {
    type?: ConstraintTypeOption;
    t: OracleRemoteCreationFormProps<State>["t"];
    value0?: bigint;
    value1?: bigint;
    onChange: (
        values: [bigint | undefined, bigint | undefined],
        valid: boolean,
    ) => void;
}
