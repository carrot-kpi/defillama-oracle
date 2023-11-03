import { useCallback, useEffect, useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { ConstraintType, type ConstraintTypeOption } from "../../types";
import { FeedbackBox, NumberInput, Typography } from "@carrot-kpi/ui";
import { formatDecimals } from "@carrot-kpi/sdk";
import type { ConstraintFormProps } from "../types";

type SingleConstraintType = Exclude<
    ConstraintType,
    ConstraintType.NOT_BETWEEN | ConstraintType.BETWEEN | ConstraintType.RANGE
>;

const CONSTRAINT_SUMMARY: {
    [C in SingleConstraintType]: string;
} = {
    [ConstraintType.EQUAL]: "label.summary.single.value.equal",
    [ConstraintType.NOT_EQUAL]: "label.summary.single.value.notEqual",
    [ConstraintType.GREATER_THAN]: "label.summary.single.value.greaterThan",
    [ConstraintType.LOWER_THAN]: "label.summary.single.value.lowerThan",
};

const validateValue = (
    value?: string,
    constraintType?: ConstraintTypeOption,
): string => {
    if (value === undefined || value === "") {
        return "error.value0.single.missing";
    }

    if (
        constraintType &&
        constraintType.value === ConstraintType.LOWER_THAN &&
        parseUnits(value, 18) <= 0n
    ) {
        return "error.value0.single.notValid";
    }

    return "";
};

export const SingleValueConstraintForm = ({
    t,
    type,
    value0,
    onChange,
    onValidChange,
}: ConstraintFormProps) => {
    const [valueErrorText, setValueErrorText] = useState("");

    useEffect(() => {
        let valueErrorText = "";

        if (value0 === undefined) {
            valueErrorText = validateValue("", type);
        } else {
            valueErrorText = validateValue(formatUnits(value0, 18), type);
        }

        setValueErrorText(t(valueErrorText));
        onValidChange(!valueErrorText);
    }, [value0, type, t, onValidChange]);

    const handleValueChange = useCallback(
        ({ value }: { value: string }) => {
            const newValue = parseUnits(value, 18);

            const valueErrorText = validateValue(value, type);
            setValueErrorText(t(valueErrorText));

            onChange([newValue, 0n]);
            onValidChange(!valueErrorText);
        },
        [onChange, type, t, onValidChange],
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="w-full">
                    <NumberInput
                        id="value0"
                        className={{
                            root: "w-full",
                            input: "w-full",
                            inputWrapper: "w-full",
                        }}
                        allowNegative={false}
                        label={t("label.value0.single")}
                        placeholder={t("placeholder.value0.single")}
                        error={!!valueErrorText}
                        errorText={valueErrorText}
                        onValueChange={handleValueChange}
                        value={
                            value0 !== undefined ? formatUnits(value0, 18) : ""
                        }
                    />
                </div>
            </div>
            {value0 !== undefined && !!type ? (
                <FeedbackBox
                    variant="success"
                    messages={{ title: t("label.goal.summary") }}
                >
                    <Typography>
                        {t("label.goal.summary.single")}{" "}
                        <strong>
                            {t(
                                CONSTRAINT_SUMMARY[
                                    type.value as SingleConstraintType
                                ],
                            )}{" "}
                            {formatDecimals({
                                number: formatUnits(value0, 18),
                                decimalsAmount: 2,
                            })}
                        </strong>
                        .
                    </Typography>
                </FeedbackBox>
            ) : (
                <FeedbackBox className={{ root: "bg-gray-300" }}>
                    <Typography uppercase>{t("label.goal.summary")}</Typography>
                </FeedbackBox>
            )}
        </div>
    );
};
