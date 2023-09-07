import type { ReactElement, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { Typography } from "@carrot-kpi/ui";

interface InfoBoxProps {
    label: string;
    children: ReactNode;
    className?: { root?: string };
}

const rootStyles = cva(["flex", "flex-col", "gap-2", "w-full", "p-6"]);

export const InfoBox = ({
    label,
    children,
    className,
}: InfoBoxProps): ReactElement => {
    return (
        <div className={rootStyles({ className: className?.root })}>
            <Typography uppercase variant="xs">
                {label}
            </Typography>
            {children}
        </div>
    );
};
