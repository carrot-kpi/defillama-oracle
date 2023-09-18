import { /* RemoteLogo, */ Typography } from "@carrot-kpi/ui";
import type { ProtocolOption as ProtocolOptionProps } from "../types";

export const ProtocolOption = ({
    label /* logoURL */,
}: ProtocolOptionProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                {/* <RemoteLogo
                    defaultText={label}
                    src={logoURL}
                    className={{ root: "w-7 h-7 mr-3" }}
                /> */}
                <Typography>{label}</Typography>
            </div>
        </div>
    );
};
