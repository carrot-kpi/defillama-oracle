import {
    ConstraintType,
    Metric,
    type ConstraintTypeOption,
    type MetricOption,
} from "../types";

export const METRICS: MetricOption[] = [
    {
        value: Metric.TVL,
        label: "Total value locked",
    },
];

export const CONSTRAINT_TYPES: ConstraintTypeOption[] = [
    {
        value: ConstraintType.BETWEEN,
        label: "Between",
    },
    {
        value: ConstraintType.NOT_BETWEEN,
        label: "Not between",
    },
    {
        value: ConstraintType.RANGE,
        label: "Range",
    },
    {
        value: ConstraintType.GREATER_THAN,
        label: "Greater than",
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
