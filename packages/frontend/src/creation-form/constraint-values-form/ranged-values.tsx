import { useCallback, useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { type ConstraintFormProps, ConstraintType } from "../../types";
import { FeedbackBox, NumberInput, Typography } from "@carrot-kpi/ui";
import { formatDecimals } from "@carrot-kpi/sdk";

// TODO: add bounds validation (for example that the lower bound is actually < higher bound)

type RangedConstraintType = Exclude<
    ConstraintType,
    | ConstraintType.EQUAL
    | ConstraintType.NOT_EQUAL
    | ConstraintType.GREATER_THAN
    | ConstraintType.LOWER_THAN
>;

const CONSTRAINT_SUMMARY: {
    [C in RangedConstraintType]: { constraint: string; details: string };
} = {
    [ConstraintType.BETWEEN]: {
        constraint: "label.summary.ranged.value.between",
        details: "label.summary.ranged.value.between.details",
    },
    [ConstraintType.NOT_BETWEEN]: {
        constraint: "label.summary.ranged.value.notBetween",
        details: "label.summary.ranged.value.range.notBetween",
    },
    [ConstraintType.RANGE]: {
        constraint: "label.summary.ranged.value.range",
        details: "label.summary.ranged.value.range.details",
    },
};

export const RangedValuesConstraintForm = ({
    t,
    type,
    value0,
    value1,
    onChange,
}: ConstraintFormProps) => {
    const [value0ErrorText, setValue0ErrorText] = useState("");
    const [value1ErrorText, setValue1ErrorText] = useState("");

    const handleValue0Change = useCallback(
        ({ value }: { value: string }) => {
            let errorText = "";

            if (!value) {
                errorText = t("error.value0.ranged.missing");
            } else if (value1 !== undefined && parseUnits(value, 18) > value1) {
                errorText = t("error.value0.ranged.tooHigh");
            } else if (
                value1 !== undefined &&
                parseUnits(value, 18) === 0n &&
                value1 === 0n
            ) {
                errorText = t("error.ranged.zero");
            }

            setValue0ErrorText(!!errorText ? errorText : "");
            onChange(
                [value ? parseUnits(value, 18) : undefined, value1],
                !errorText,
            );
        },
        [t, setValue0ErrorText, onChange, value1],
    );

    const handleValue1Change = useCallback(
        ({ value }: { value: string }) => {
            let errorText = "";

            if (!value) {
                errorText = t("error.value1.ranged.missing");
            } else if (value0 !== undefined && parseUnits(value, 18) < value0) {
                errorText = t("error.value1.ranged.tooLow");
            } else if (
                value0 !== undefined &&
                parseUnits(value, 18) === 0n &&
                value0 === 0n
            ) {
                errorText = t("error.ranged.zero");
            }

            setValue1ErrorText(!!errorText ? errorText : "");
            onChange(
                [value0, value ? parseUnits(value, 18) : undefined],
                !errorText,
            );
        },
        [t, setValue1ErrorText, onChange, value0],
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="w-full md:w-1/2">
                    <NumberInput
                        className={{
                            root: "w-full",
                            input: "w-full",
                            inputWrapper: "w-full",
                        }}
                        label={t("label.value0.ranged")}
                        placeholder={t("placeholder.value0.ranged")}
                        allowNegative={false}
                        onValueChange={handleValue0Change}
                        error={!!value0ErrorText}
                        errorText={value0ErrorText}
                        value={
                            value0 !== undefined ? formatUnits(value0, 18) : ""
                        }
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <NumberInput
                        className={{
                            root: "w-full",
                            input: "w-full",
                            inputWrapper: "w-full",
                        }}
                        label={t("label.value1.ranged")}
                        placeholder={t("placeholder.value1.ranged")}
                        allowNegative={false}
                        onValueChange={handleValue1Change}
                        error={!!value1ErrorText}
                        errorText={value1ErrorText}
                        value={
                            value1 !== undefined ? formatUnits(value1, 18) : ""
                        }
                    />
                </div>
            </div>
            {!value0ErrorText &&
            !value1ErrorText &&
            value0 !== undefined &&
            value1 !== undefined &&
            !!type ? (
                <FeedbackBox
                    variant="info"
                    messages={{ title: t("label.goal.summary") }}
                    className={{ root: "flex flex-col gap-2" }}
                >
                    <Typography>
                        {t("label.goal.summary.ranged")}{" "}
                        <strong>
                            {t(
                                CONSTRAINT_SUMMARY[
                                    type.value as RangedConstraintType
                                ].constraint,
                            )}{" "}
                            {t("label.summary.ranged.values", {
                                value0: formatDecimals({
                                    number: formatUnits(value0, 18),
                                    decimalsAmount: 2,
                                }),
                                value1: formatDecimals({
                                    number: formatUnits(value1, 18),
                                    decimalsAmount: 2,
                                }),
                            })}
                        </strong>
                        .
                    </Typography>
                    <Typography>
                        {t(
                            CONSTRAINT_SUMMARY[
                                type.value as RangedConstraintType
                            ].details,
                        )}
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
