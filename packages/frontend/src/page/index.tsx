import "../global.css";
import "@carrot-kpi/ui/styles.css";

import { useEffect, type ReactElement, useState, type FC } from "react";
import type { OracleRemotePageProps } from "@carrot-kpi/react";
import { decodeOracleData } from "./utils/data-decoding";
import { Loader } from "@carrot-kpi/ui";
import { useSpecificationContent } from "./hooks/useSpecificationContent";
import { Metric, type DecodedOracleData, type MetricPageProps } from "../types";
import { TvlPage } from "./metric-page/tvl";

const PAGE_BY_METRIC: {
    [M in Metric]: FC<MetricPageProps>;
} = {
    [Metric.TVL]: TvlPage,
};

export const Component = ({
    oracle,
    ...rest
}: OracleRemotePageProps): ReactElement => {
    const [decodedData, setDecodedData] = useState<DecodedOracleData | null>(
        null,
    );

    const { loading, specification } = useSpecificationContent(
        decodedData?.specificationCid,
    );

    useEffect(() => {
        if (!oracle) return;
        setDecodedData(decodeOracleData(oracle.data));
    }, [oracle]);

    if (loading || !specification || !decodedData)
        return (
            <div className="w-full flex justify-center p-6">
                <Loader />
            </div>
        );

    const Page = PAGE_BY_METRIC[specification.metric];
    return (
        <Page
            oracle={oracle}
            {...rest}
            specification={specification}
            decodedOracleData={decodedData}
        />
    );
};
