import type { SVGIconProps } from "./types";

const ArrowUp = (props: SVGIconProps) => {
    return (
        <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="currentColor"
                d="M8.707 2.293a1 1 0 0 0-1.414 0L.929 8.657a1 1 0 0 0 1.414 1.414L8 4.414l5.657 5.657a1 1 0 0 0 1.414-1.414L8.707 2.293ZM9 18V3H7v15h2Z"
            />
            <path stroke="currentColor" strokeWidth={2} d="M16 1H1" />
        </svg>
    );
};

export default ArrowUp;
