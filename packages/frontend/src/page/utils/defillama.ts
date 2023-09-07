import { Metric } from "../../types";

export const getDefiLlamaLink = (protocol: string, metric: Metric) => {
    let url = `https://defillama.com/protocol/${protocol}?`;
    switch (metric) {
        case Metric.TVL: {
            url += "tvl=true";
            break;
        }
    }
    return url;
};
