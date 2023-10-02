import { ConstraintType } from "../../types";

interface GoalCompletionParams {
    constraint: ConstraintType;
    value0: number;
    value1: number;
    result: number;
}

const UNIT = 1_000_000;

function getGoalCompletion({
    constraint,
    result,
    value0,
    value1,
}: GoalCompletionParams) {
    // implement the on-chain logic
    switch (constraint) {
        case ConstraintType.RANGE: {
            if (result <= value0) return 0;
            if (result >= value1) return UNIT;
            else {
                return ((result - value0) * UNIT) / (value1 - value0);
            }
        }
        case ConstraintType.BETWEEN: {
            return result > value0 && result < value1 ? UNIT : 0;
        }
        case ConstraintType.NOT_BETWEEN: {
            return result < value0 || result > value1 ? UNIT : 0;
        }
        case ConstraintType.GREATER_THAN: {
            return result > value0 ? UNIT : 0;
        }
        case ConstraintType.LOWER_THAN: {
            return result < value0 ? UNIT : 0;
        }
        case ConstraintType.EQUAL: {
            return result === value0 ? UNIT : 0;
        }
        case ConstraintType.NOT_EQUAL: {
            return result !== value0 ? UNIT : 0;
        }
    }
}

export function useGoalCompletionPercentage({
    constraint,
    value0,
    value1,
    result,
}: GoalCompletionParams) {
    const completion = getGoalCompletion({
        constraint,
        result,
        value0,
        value1,
    });

    return (completion / UNIT) * 100;
}
