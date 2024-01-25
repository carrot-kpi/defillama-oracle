import {
    useIPFSGatewayURL,
    usePreferDecentralization,
    useProdMode,
} from "@carrot-kpi/react";
import { Fetcher, Service, getServiceURL } from "@carrot-kpi/sdk";
import { useEffect, useState } from "react";
import { type Specification } from "../types";

export function useSpecificationContent(cid?: string) {
    const ipfsGatewayURL = useIPFSGatewayURL();
    const prodMode = useProdMode();
    const preferDecentralization = usePreferDecentralization();

    const [loading, setLoading] = useState(false);
    const [specification, setSpecification] = useState<Specification | null>(
        null,
    );

    useEffect(() => {
        if (!cid) return;
        let cancelled = false;
        const fetchData = async () => {
            try {
                if (!cancelled) setLoading(true);
                const content = (
                    await Fetcher.fetchCIDData({
                        dataCDNURL: getServiceURL(Service.DATA_CDN, prodMode),
                        cids: [cid],
                        ipfsGatewayURL,
                        preferDecentralization,
                    })
                )[cid];
                if (!cancelled)
                    setSpecification(JSON.parse(content) as Specification);
            } catch (error) {
                console.warn(
                    `could not get specification content from cid ${cid}`,
                    error,
                );
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        void fetchData();
        return () => {
            cancelled = true;
        };
    }, [ipfsGatewayURL, cid, prodMode, preferDecentralization]);

    return { loading, specification };
}
