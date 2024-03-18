import {
    useIPFSGatewayURL,
    usePreferDecentralization,
} from "@carrot-kpi/react";
import { Fetcher } from "@carrot-kpi/sdk";
import { useEffect, useState } from "react";
import { type Specification } from "../types";
import { useAccount } from "wagmi";

export function useSpecificationContent(cid?: string) {
    const { chain } = useAccount();
    const ipfsGatewayURL = useIPFSGatewayURL();
    const preferDecentralization = usePreferDecentralization();

    const [loading, setLoading] = useState(false);
    const [specification, setSpecification] = useState<Specification | null>(
        null,
    );

    useEffect(() => {
        if (!cid || !chain) return;
        let cancelled = false;
        const fetchData = async () => {
            try {
                if (!cancelled) setLoading(true);
                const content = (
                    await Fetcher.fetchCIDData({
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
    }, [ipfsGatewayURL, cid, chain, preferDecentralization]);

    return { loading, specification };
}
