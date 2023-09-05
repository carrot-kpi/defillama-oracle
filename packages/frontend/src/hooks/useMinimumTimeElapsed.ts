import { type Address, useContractRead } from "wagmi";
import DEFILLAMA_ORACLE_ABI from "../abis/defillama-oracle";

export const useMinimumTimeElapsed = (
    address?: Address,
): {
    loading: boolean;
    minimumTimeElapsed?: bigint;
} => {
    const { data: minimumTimeElapsed, isLoading: loading } = useContractRead({
        abi: DEFILLAMA_ORACLE_ABI,
        address,
        functionName: "minimumElapsedTime",
    });

    return { minimumTimeElapsed, loading };
};
