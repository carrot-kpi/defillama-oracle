import { decodeAbiParameters } from "viem";
import { type Hex, type Address } from "viem";

export const decodeOracleData = (
    data: Hex,
): {
    specificationCid: string;
} => {
    const [, specificationCid] = decodeAbiParameters(
        [
            { type: "address", name: "answerer" },
            { type: "string", name: "specificationCid" },
        ],
        data,
    ) as [Address, string];
    return { specificationCid };
};
