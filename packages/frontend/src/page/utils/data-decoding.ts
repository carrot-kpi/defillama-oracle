import { decodeAbiParameters } from "viem";
import { type Hex, type Address } from "viem";

export const decodeOracleData = (
    data: Hex,
): {
    answerer: Address;
    specificationCid: string;
    measurementTimestamp: bigint;
} => {
    const [answerer, specificationCid, measurementTimestamp] =
        decodeAbiParameters(
            [
                { type: "address", name: "answerer" },
                { type: "string", name: "specificationCid" },
                { type: "uint256", name: "measurementTimestamp" },
            ],
            data,
        ) as [Address, string, bigint];
    return { answerer, specificationCid, measurementTimestamp };
};
