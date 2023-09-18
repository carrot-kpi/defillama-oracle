import { useCallback } from "react";
import { formatUnits, parseUnits } from "viem";
import type { ConstraintFormProps } from "../../types";
import { FeedbackBox, NumberInput, Typography } from "@carrot-kpi/ui";

// TODO: add bounds validation (for example that the lower bound is actually < higher bound)

export const RangedValuesConstraintForm = ({
    t,
    type,
    value0,
    value1,
    onChange,
}: ConstraintFormProps) => {
    const handleValue0Change = useCallback(
        ({ value }: { value: string }) => {
            onChange([value ? parseUnits(value, 18) : undefined, value1]);
        },
        [onChange, value1],
    );

    const handleValue1Change = useCallback(
        ({ value }: { value: string }) => {
            onChange([value0, value ? parseUnits(value, 18) : undefined]);
        },
        [onChange, value0],
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
                        value={
                            value0 || value0 == 0n
                                ? formatUnits(value0, 18)
                                : ""
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
                        value={
                            value1 || value1 == 0n
                                ? formatUnits(value1, 18)
                                : ""
                        }
                    />
                </div>
            </div>
            {!!value0 && !!value1 && !!type ? (
                <FeedbackBox
                    variant="info"
                    messages={{ title: t("label.goal.summary") }}
                >
                    {/* FIXME: this text should change depending on the specific constraint
                        type. For example the difference between the "between" constraint
                        and the "range" constraint is big */}
                    <Typography>
                        {t("goal.summary.ranged", {
                            type: type.label.toLowerCase(),
                            value0: formatUnits(value0, 18),
                            value1: formatUnits(value1, 18),
                        })}
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
