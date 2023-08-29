import { type FC } from "react";
import {
    Metric,
    type PayloadFormProps as InnerPayloadForm,
    type Specificaton,
} from "../../types";
import { TvlPayloadForm } from "./tvl";
import { Typography } from "@carrot-kpi/ui";

export interface PayloadFormProps extends InnerPayloadForm {
    metric?: Metric | null;
    payload?: Partial<Specificaton["payload"]>;
    onChange: (payload: Specificaton["payload"]) => void;
}

const PAYLOAD_FORM_BY_METRIC: {
    [M in Metric]: FC<PayloadFormProps>;
} = {
    [Metric.TVL]: TvlPayloadForm,
};

export const PayloadForm = ({
    metric,
    payload,
    onChange,
    ...rest
}: PayloadFormProps) => {
    if (!metric)
        return (
            <div className="flex justify-center">
                <Typography>Select a metric</Typography>;
            </div>
        );

    const PayloadForm = PAYLOAD_FORM_BY_METRIC[metric];
    return <PayloadForm onChange={onChange} payload={payload} {...rest} />;
};
