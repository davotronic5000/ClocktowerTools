import { ReactNode, createElement } from "react";

const fontSizes = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-base",
    h5: "text-sm",
    h6: "text-xs",
};

const Heading = ({
    as = "h2",
    children,
    className = "",
}: {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: ReactNode;
    className?: string;
}) => {
    return createElement(
        `${as}`,
        { className: `font-serif small-caps ${fontSizes[as]} ${className}` },
        children,
    );
};

export default Heading;
