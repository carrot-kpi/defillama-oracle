import { useWagmiPassiveHook } from "@carrot-kpi/react";
import { ORACLE_ABI } from "@carrot-kpi/sdk";
import { useEffect, useState } from "react";
import type { Address, Hex } from "viem";
import { useReadContracts } from "wagmi";

interface WatchOracleDataParams {
    oracleAddress?: Address;
}

interface OracleData {
    finalized: boolean;
    data: Hex;
}

export function useWatchOracleData(
    params?: WatchOracleDataParams,
): OracleData | null {
    const [data, setData] = useState<OracleData | null>(null);

    const { data: readResults } = useWagmiPassiveHook({
        hook: useReadContracts,
        params: {
            contracts: [
                {
                    address: params?.oracleAddress,
                    abi: ORACLE_ABI,
                    functionName: "data",
                },
                {
                    address: params?.oracleAddress,
                    abi: ORACLE_ABI,
                    functionName: "finalized",
                },
            ],
            query: {
                enabled: !!params?.oracleAddress,
            },
        },
    });

    useEffect(() => {
        if (!readResults || !params?.oracleAddress) return;

        setData({
            data: readResults[0].result as Hex,
            finalized: readResults[1].result as boolean,
        });
    }, [params?.oracleAddress, readResults]);

    return data;
}
