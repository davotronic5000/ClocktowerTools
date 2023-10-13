import { ComponentType } from "react";
import icons, { iconTypes } from "./icons";
import { tw } from "@/utilities/tailwind";

interface IconProps {
    type: iconTypes;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
}

const Icon: ComponentType<IconProps> = ({ type, size = "xl", className }) => {
    const iconType = icons[type];
    const sizes = {
        xs: tw`h-4 w-4`,
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
        >
            <path fill="currentColor" d={iconType.d} />
        </svg>
    );
};

export default Icon;
