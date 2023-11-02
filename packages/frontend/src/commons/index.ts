import type { MetricOption } from "../creation-form/types";
import { ConstraintType, type ConstraintTypeOption } from "../types";

export const SUGGESTED_EXPIRATION_DATE_BUFFER = 2_628_000; // a month

export const METRICS: MetricOption[] = [
    {
        value: "tvl",
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
