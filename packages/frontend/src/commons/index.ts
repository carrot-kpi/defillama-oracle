import { Environment } from "@carrot-kpi/shared-state";
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

export interface ServiceUrls {
    defillamaAnswerer: string;
}

export const SERVICE_URLS: Record<Environment, ServiceUrls> = {
    [Environment.Local]: {
        defillamaAnswerer: "http://127.0.0.1:9080",
    },
    [Environment.Development]: {
        defillamaAnswerer:
            "https://defillama-answerer.api.dev.carrot.community",
    },
    [Environment.Staging]: {
        defillamaAnswerer:
            "https://defillama-answerer.api.staging.carrot.community",
    },
    [Environment.Production]: {
        defillamaAnswerer: "https://defillama-answerer.api.carrot.community",
    },
};
