import type { Metric } from "../../types";

export const getDefiLlamaLink = (protocol: string, metric: Metric) => {
    let url = `https://defillama.com/protocol/${protocol}?`;
    switch (metric) {
        case "tvl": {
            url += "tvl=true";
            break;
        }
    }
    return url;
};
