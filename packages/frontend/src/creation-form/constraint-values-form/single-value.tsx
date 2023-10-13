import { useCallback, useEffect, useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { type ConstraintFormProps, ConstraintType } from "../../types";
import { FeedbackBox, NumberInput, Typography } from "@carrot-kpi/ui";
import { formatDecimals } from "@carrot-kpi/sdk";

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

export const SingleValueConstraintForm = ({
    t,
    type,
    value0,
    onChange,
}: ConstraintFormProps) => {
    const [valueErrorText, setValueErrorText] = useState("");

    useEffect(() => {
        let valueErrorText = "";

        if (value0 === undefined) {
            valueErrorText = t("error.value0.single.missing");
        } else if (
            type &&
            type.value === ConstraintType.LOWER_THAN &&
            value0 <= 0n
        ) {
            valueErrorText = t("error.value0.single.notValid");
        }

        setValueErrorText(!!valueErrorText ? valueErrorText : "");
        onChange([value0, 0n], !valueErrorText);
    }, [onChange, t, type, value0]);

    const handleValueChange = useCallback(
        ({ value }: { value: string }) => {
            onChange([parseUnits(value, 18), 0n], !valueErrorText);
        },
        [onChange, valueErrorText],
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
