import { type FC } from "react";
import { ConstraintType } from "../../types";
import { SingleValueConstraintForm } from "./single-value";
import { Typography } from "@carrot-kpi/ui";
import { RangedValuesConstraintForm } from "./ranged-values";
import type { ConstraintFormProps } from "../types";

const CONSTRAINT_FORM_BY_TYPE: {
    [C in ConstraintType]: FC<ConstraintFormProps>;
} = {
    [ConstraintType.EQUAL]: SingleValueConstraintForm,
    [ConstraintType.NOT_EQUAL]: SingleValueConstraintForm,
    [ConstraintType.GREATER_THAN]: SingleValueConstraintForm,
    [ConstraintType.LOWER_THAN]: SingleValueConstraintForm,
    [ConstraintType.BETWEEN]: RangedValuesConstraintForm,
    [ConstraintType.NOT_BETWEEN]: RangedValuesConstraintForm,
    [ConstraintType.RANGE]: RangedValuesConstraintForm,
};

export const ConstraintForm = ({
    t,
    type,
    onChange,
    onValidChange,
    ...rest
}: ConstraintFormProps) => {
    if (!type && type !== 0)
        return (
            <div className="flex justify-center py-4">
                <Typography>
                    {t("label.constraint.form.placeholder")}
                </Typography>
            </div>
        );

    const ConstraintForm = CONSTRAINT_FORM_BY_TYPE[type.value];
    return (
        <ConstraintForm
            type={type}
            onChange={onChange}
            onValidChange={onValidChange}
            t={t}
            {...rest}
        />
    );
};
