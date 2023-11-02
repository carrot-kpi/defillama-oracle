import type {
    OracleInitializationBundleGetter,
    Uploader as IpfsUploader,
} from "@carrot-kpi/react";
import type { Constraint, Specification } from "../types";
import { encodeAbiParameters } from "viem";

export const getInitializationBundleGetter = (
    uploadToIpfs: IpfsUploader,
    timestamp: number,
    specification: Specification,
    constraint: Required<Constraint>,
): OracleInitializationBundleGetter => {
    return async () => {
        const specificationCid = await uploadToIpfs(
            JSON.stringify(specification),
        );
        const initializationData = encodeAbiParameters(
            [
                { type: "string", name: "specification" },
                { type: "uint256", name: "measurementTimestamp" },
                { type: "uint256", name: "constraint" },
                { type: "uint256", name: "value0" },
                { type: "uint256", name: "value1" },
            ],
            [
                specificationCid,
                BigInt(timestamp),
                BigInt(Number(constraint.type)),
                BigInt(constraint.value0),
                BigInt(constraint.value1),
            ],
        );
        return {
            data: initializationData,
            value: 0n,
        };
    };
};
