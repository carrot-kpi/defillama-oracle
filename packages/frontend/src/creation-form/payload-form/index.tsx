import { type FC } from "react";
import { TvlPayloadForm } from "./tvl";
import { Typography } from "@carrot-kpi/ui";
import {
    type PayloadFormProps as InnerPayloadFormProps,
    type Specification,
} from "../types";
import type { Metric } from "../../types";

export interface PayloadFormProps extends InnerPayloadFormProps {
    metric?: Metric;
    payload?: Partial<Specification["payload"]>;
    onChange: (payload: Specification["payload"]) => void;
}

const PAYLOAD_FORM_BY_METRIC: {
    [M in Metric]: FC<PayloadFormProps>;
} = {
    tvl: TvlPayloadForm,
};

export const PayloadForm = ({
    metric,
    measurementTimestamp,
    payload,
    onChange,
    t,
    ...rest
}: PayloadFormProps) => {
    if (!metric)
        return (
            <div className="flex justify-center py-4">
                <Typography>{t("label.payload.form.placeholder")}</Typography>
            </div>
        );

    const PayloadForm = PAYLOAD_FORM_BY_METRIC[metric];
    return (
        <PayloadForm
            onChange={onChange}
            measurementTimestamp={measurementTimestamp}
            payload={payload}
            t={t}
            {...rest}
        />
    );
};
