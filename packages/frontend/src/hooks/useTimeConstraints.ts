import { useReadContracts } from "wagmi";
import DEFILLAMA_ORACLE_ABI from "../abis/defillama-oracle";
import type { Address } from "viem";

export const useTimeConstraints = (
    address?: Address,
): {
    loading: boolean;
    minimumTimeElapsed?: number;
    expirationBufferTime?: number;
} => {
    const { data, isLoading: loading } = useReadContracts({
        contracts: [
            {
                abi: DEFILLAMA_ORACLE_ABI,
                address,
                functionName: "minimumElapsedTime",
            },
            {
                abi: DEFILLAMA_ORACLE_ABI,
                address,
                functionName: "expirationBufferTime",
            },
        ],
        query: { enabled: !!address },
    });

    const rawMinimumTimeElapsed = data?.[0].result as bigint | undefined;
    const rawExpirationBufferTime = data?.[1].result as bigint | undefined;

    return {
        minimumTimeElapsed: rawMinimumTimeElapsed
            ? Number(rawMinimumTimeElapsed)
            : undefined,
        expirationBufferTime: rawExpirationBufferTime
            ? Number(rawExpirationBufferTime)
            : undefined,
        loading,
    };
};
