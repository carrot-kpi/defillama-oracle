import { formatUnits } from "viem";
import { ConstraintType } from "../../types";

interface CurrentGoalStatusParams {
    constraint: ConstraintType;
    value0: bigint;
    value1: bigint;
    result: bigint;
}

const UNIT = 1_000_000n;

function getGoalCompletion({
    constraint,
    result,
    value0,
    value1,
}: CurrentGoalStatusParams) {
    // implement the on-chain logic
    switch (constraint) {
        case ConstraintType.RANGE: {
            if (result <= value0) return 0n;
            if (result >= value1) return UNIT;
            else {
                return ((result - value0) * UNIT) / (value1 - value0);
            }
        }
        case ConstraintType.BETWEEN: {
            return result > value0 && result < value1 ? UNIT : 0n;
        }
        case ConstraintType.NOT_BETWEEN: {
            return result < value0 || result > value1 ? UNIT : 0n;
        }
        case ConstraintType.GREATER_THAN: {
            return result > value0 ? UNIT : 0n;
        }
        case ConstraintType.LOWER_THAN: {
            return result < value0 ? UNIT : 0n;
        }
        case ConstraintType.EQUAL: {
            return result === value0 ? UNIT : 0n;
        }
        case ConstraintType.NOT_EQUAL: {
            return result !== value0 ? UNIT : 0n;
        }
        default: {
            console.error("invalid constraint type", constraint);
            return 0n;
        }
    }
}

export function useGoalCompletionPercentage({
    constraint,
    value0,
    value1,
    result,
}: CurrentGoalStatusParams) {
    const completion = getGoalCompletion({
        constraint,
        result,
        value0: BigInt(formatUnits(value0, 18)),
        value1: BigInt(formatUnits(value1, 18)),
    });

    return (completion / UNIT) * 100n;
}
