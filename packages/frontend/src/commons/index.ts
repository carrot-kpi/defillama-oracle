import { Metric, type MetricOption } from "../types";

export const DEFILLAMA_ANSWERER_URL = __DEV__
    ? "http://127.0.0.1:8080"
    : "https://defillama-answerer.carrot-kpi.dev";

export const METRICS: MetricOption[] = [
    {
        value: Metric.TVL,
        label: "Total value locked",
    },
];
