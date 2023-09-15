import { useCallback } from "react";
import { formatUnits, parseUnits } from "viem";
import type { ConstraintFormProps } from "../../types";
import { NumberInput, Typography } from "@carrot-kpi/ui";

// TODO: improve value validation

export const SingleValueConstraintForm = ({
    t,
    type,
    value0,
    onChange,
}: ConstraintFormProps) => {
    const handleValueChange = useCallback(
        ({ value }: { value: string }) => {
            onChange([parseUnits(value, 18), 0n]);
        },
        [onChange],
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
                        onValueChange={handleValueChange}
                        value={value0 ? formatUnits(value0, 18) : ""}
                    />
                </div>
            </div>
            {!!value0 && !!type && (
                <Typography>
                    The goal will be considered reached if the metric measured
                    at the measurement timestamp will be{" "}
                    {type.label.toLowerCase()} {formatUnits(value0, 18)}
                </Typography>
            )}
        </div>
    );
};
