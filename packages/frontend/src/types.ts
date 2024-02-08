import { ChainId } from "@carrot-kpi/sdk";
import type { SelectOption } from "@carrot-kpi/ui";

export enum ConstraintType {
    BETWEEN,
    NOT_BETWEEN,
    RANGE,
    GREATER_THAN,
    LOWER_THAN,
    EQUAL,
    NOT_EQUAL,
}

export type ConstraintTypeOption = {
    label: string;
    value: ConstraintType;
    highlighted?: boolean;
};

export enum SupportedChainId {
    GNOSIS = ChainId.GNOSIS,
    SEPOLIA = ChainId.SEPOLIA,
}

export type Metric = "tvl";

export interface ProtocolOption extends SelectOption<string> {
    logoURL: string;
}
