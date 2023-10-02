import type { ReactElement, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { Typography } from "@carrot-kpi/ui";

interface InfoBoxProps {
    label: string;
    icon?: ReactNode;
    children: ReactNode;
    className?: { root?: string; labelContainer?: string };
}

const rootStyles = cva(["flex", "flex-col", "gap-2", "w-full", "p-6"]);

const labelContainerStyles = cva(["flex", "gap-1", "items-baseline"]);

export const InfoBox = ({
    label,
    icon,
    children,
    className,
}: InfoBoxProps): ReactElement => {
    return (
        <div className={rootStyles({ className: className?.root })}>
            <div
                className={labelContainerStyles({
                    className: className?.labelContainer,
                })}
            >
                {icon}
                <Typography uppercase variant="xs">
                    {label}
                </Typography>
            </div>
            {children}
        </div>
    );
};
