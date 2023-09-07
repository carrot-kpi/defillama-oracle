import { useEffect, useState } from "react";

export const useDefiLlamaCurrentTvl = (
    protocol?: string,
): {
    loading: boolean;
    tvl: string;
} => {
    const [loading, setLoading] = useState(false);
    const [tvl, setTvl] = useState("");

    useEffect(() => {
        let cancelled = false;
        const fetchData = async (): Promise<void> => {
            if (!protocol) return;
            if (!cancelled) setLoading(true);
            try {
                const response = await fetch(
                    `https://api.llama.fi/tvl/${protocol}`,
                );
                if (!response.ok) {
                    console.error(
                        `could not fetch current tvl for protocol ${protocol} from defillama`,
                    );
                    return;
                }
                const currentTvl = await response.text();
                if (!cancelled) setTvl(currentTvl);
            } catch (error) {
                console.error(
                    `error fetching current tvl for protocol ${protocol} from defillama`,
                    error,
                );
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchData();
        return () => {
            cancelled = true;
        };
    }, [protocol]);

    return { loading, tvl };
};
