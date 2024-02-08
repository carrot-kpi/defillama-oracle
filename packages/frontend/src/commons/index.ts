import type { MetricOption } from "../creation-form/types";
import { ConstraintType, type ConstraintTypeOption } from "../types";

export const METRICS: MetricOption[] = [
    {
        value: "tvl",
        label: "Total value locked",
    },
];

export const CONSTRAINT_TYPES: ConstraintTypeOption[] = [
    {
        value: ConstraintType.RANGE,
        label: "Range",
        highlighted: true,
    },
    {
        value: ConstraintType.GREATER_THAN,
        label: "Greater than",
        highlighted: true,
    },
    {
        value: ConstraintType.BETWEEN,
        label: "Between",
    },
    {
        value: ConstraintType.NOT_BETWEEN,
        label: "Not between",
    },
    {
        value: ConstraintType.LOWER_THAN,
        label: "Lower than",
    },
    {
        value: ConstraintType.EQUAL,
        label: "Equal",
    },
    {
        value: ConstraintType.NOT_EQUAL,
        label: "Not equal",
    },
];
