import type { SelectOption } from "@carrot-kpi/ui";
import { useEffect, useState } from "react";

export type Response = {
    name: string;
    slug: string;
}[];

export type ProtocolOption = SelectOption<string>;

export const useDefiLlamaProtocols = (): {
    loading: boolean;
    protocols: ProtocolOption[];
} => {
    const [loading, setLoading] = useState(false);
    const [protocols, setProtocols] = useState<ProtocolOption[]>([]);

    useEffect(() => {
        let cancelled = false;
        const fetchData = async (): Promise<void> => {
            if (!cancelled) setLoading(true);
            try {
                const response = await fetch("https://api.llama.fi/protocols");
                if (!response.ok) {
                    console.error(
                        "could not fetch supported protocols from defillama",
                    );
                    return;
                }
                const rawProtocols = (await response.json()) as Response;
                // raw protocols also contain a lot of other stuff, so here we
                // remove that
                const protocols = rawProtocols.map((rawProtocol) => ({
                    label: rawProtocol.name,
                    value: rawProtocol.slug,
                }));
                if (!cancelled) setProtocols(protocols);
            } catch (error) {
                console.error(
                    "error fetching defillama supported protocols",
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
    }, []);

    return { loading, protocols };
};
