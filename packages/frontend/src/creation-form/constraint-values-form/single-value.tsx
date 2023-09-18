import { useCallback, useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { type ConstraintFormProps, ConstraintType } from "../../types";
import { NumberInput, Typography } from "@carrot-kpi/ui";

// TODO: improve value validation

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
    const handleValueChange = useCallback(
        ({ value }: { value: string }) => {
            let errorText = "";

            console.log({ value });

            if (!value) {
                errorText = t("error.value0.single.missing");
            } else if (
                type?.value === ConstraintType.LOWER_THAN &&
                BigInt(value) <= 0n
            ) {
                errorText = t("error.value0.single.notValid");
            }

            setValueErrorText(!!errorText ? errorText : "");
            onChange([parseUnits(value, 18), 0n]);
        },
        [onChange, t, type],
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
                        value={value0 ? formatUnits(value0, 18) : ""}
                    />
                </div>
            </div>
            {!!value0 && !!type && (
                <Typography>
                    {t("label.goal.summary.single")}{" "}
                    <strong>
                        {t(
                            CONSTRAINT_SUMMARY[
                                type.value as SingleConstraintType
                            ],
                        )}{" "}
                        {formatUnits(value0, 18)}.
                    </strong>
                </Typography>
            )}
        </div>
    );
};
