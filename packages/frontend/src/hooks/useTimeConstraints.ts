import { type Address, useContractReads } from "wagmi";
import DEFILLAMA_ORACLE_ABI from "../abis/defillama-oracle";

export const useTimeConstraints = (
    address?: Address,
): {
    loading: boolean;
    minimumTimeElapsed?: bigint;
    expirationBufferTime?: bigint;
} => {
    const { data, isLoading: loading } = useContractReads({
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
    });

    return {
        minimumTimeElapsed: data?.[0].result as bigint | undefined,
        expirationBufferTime: data?.[1].result as bigint | undefined,
        loading,
    };
};
