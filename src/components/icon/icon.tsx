import { tw } from "@/utilities/tailwind";
import { ComponentType, SVGAttributes } from "react";
import icons, { iconTypes } from "./icons";

interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
    type: iconTypes;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
    title?: string;
}

const Icon: ComponentType<IconProps> = ({
    type,
    size = "md",
    className,
    title,
    ...rest
}) => {
    const iconType = icons[type];
    const sizes = {
        xs: tw`h-6 w-6`,
        sm: tw`h-8 w-8`,
        md: tw`h-12 w-12`,
        lg: tw`h-16 w-16`,
        xl: tw`h-20 w-20`,
    };
    return (
        <svg
            viewBox={iconType.viewBox}
            className={tw`${sizes[size]} inline-block shrink leading-[1em] ${
                className ? className : ""
            }`}
            {...rest}
        >
            {title && <title>{title}</title>}
            <path
                fill="currentColor"
                d={iconType.d}
                fillRule={iconType.fillRule}
                clipPath={iconType.clipRule}
            />
        </svg>
    );
};

export default Icon;
