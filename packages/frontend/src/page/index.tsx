import "../global.css";
import "@carrot-kpi/ui/styles.css";

import { useEffect, type ReactElement, useState } from "react";
import type { OracleRemotePageProps } from "@carrot-kpi/react";
import { decodeOracleData } from "./utils/data-decoding";
import { Loader, Typography } from "@carrot-kpi/ui";
import { useSpecificationContent } from "./hooks/useSpecificationContent";

export const Component = ({ oracle }: OracleRemotePageProps): ReactElement => {
    const [specificationCid, setSpecificationCid] = useState("");
    const [measurementTimestamp, setMeasurementTimestamp] = useState<
        bigint | null
    >(null);

    const { loading, specification } =
        useSpecificationContent(specificationCid);

    useEffect(() => {
        if (!oracle) return;
        const decoded = decodeOracleData(oracle.data);
        if (!decoded) return;
        setSpecificationCid(decoded.specificationCid);
        setMeasurementTimestamp(decoded.measurementTimestamp);
    }, [oracle]);

    return loading ? (
        <Loader />
    ) : (
        <Typography>
            {JSON.stringify(specification, null, 4)}
            <br />
            {measurementTimestamp?.toString()}
        </Typography>
    );
};
