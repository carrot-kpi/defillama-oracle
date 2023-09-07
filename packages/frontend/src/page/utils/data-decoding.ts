import { decodeAbiParameters } from "viem";
import { type Hex, type Address } from "viem";
import type { DecodedOracleData } from "../../types";
import dayjs from "dayjs";

export const decodeOracleData = (data: Hex): DecodedOracleData => {
    const [answerer, specificationCid, measurementTimestamp, result] =
        decodeAbiParameters(
            [
                { type: "address", name: "answerer" },
                { type: "string", name: "specificationCid" },
                { type: "uint256", name: "measurementTimestamp" },
                { type: "uint256", name: "result" },
            ],
            data,
        ) as [Address, string, bigint, bigint];
    return {
        answerer,
        specificationCid,
        measurementTimestamp: dayjs.unix(Number(measurementTimestamp)),
        result,
    };
};
