import { decodeAbiParameters } from "viem";
import { type Hex, type Address } from "viem";
import { type DecodedOracleData } from "../types";
import dayjs from "dayjs";

export const decodeOracleData = (data: Hex): DecodedOracleData => {
    const [
        answerer,
        constraint,
        value0,
        value1,
        specificationCid,
        measurementTimestamp,
        result,
    ] = decodeAbiParameters(
        [
            { type: "address", name: "answerer" },
            { type: "uint256", name: "constraint" },
            { type: "uint256", name: "value0" },
            { type: "uint256", name: "value1" },
            { type: "string", name: "specification" },
            { type: "uint256", name: "measurementTimestamp" },
            { type: "uint256", name: "result" },
        ],
        data,
    ) as [Address, bigint, bigint, bigint, string, bigint, bigint];
    return {
        answerer,
        constraint: Number(constraint),
        value0,
        value1,
        specificationCid,
        measurementTimestamp: dayjs.unix(Number(measurementTimestamp)),
        result,
    };
};
