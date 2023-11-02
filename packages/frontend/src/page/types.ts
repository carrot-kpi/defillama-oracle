import type { OracleRemotePageProps } from "@carrot-kpi/react";
import type { Dayjs } from "dayjs";
import type { Address } from "viem";
import type { ConstraintType } from "../types";

export interface Constraint {
    type: ConstraintType;
    value0: string;
    value1: string;
}

export type Specification = {
    metric: "tvl";
    payload: {
        protocol: string;
    };
};

export interface DecodedOracleData {
    answerer: Address;
    constraint: ConstraintType;
    value0: bigint;
    value1: bigint;
    specificationCid: string;
    measurementTimestamp: Dayjs;
    result: bigint;
}

export interface MetricPageProps extends OracleRemotePageProps {
    specification: Specification;
    decodedOracleData: DecodedOracleData;
}
