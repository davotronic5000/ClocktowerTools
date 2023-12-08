import { tw } from "@/utilities/tailwind";
import { ButtonRenderProps } from "react-aria-components";

export interface SharedButtonProps {
    size?: "sm" | "md";
    className?: string;
    variant?: "primary" | "secondary";
}

export const buttonStyles = {
    main: tw`border-2 border-solid font-bold uppercase shadow-lg shadow-blue-950/50 transition-colors duration-700`,
    size: {
        sm: tw`px-2 py-1 text-xs`,
        md: tw`px-4 py-2`,
    },
    type: {
        primary: (disabled: boolean) =>
            tw`border-sky-500 bg-blue-950 text-sky-500 ${
                !disabled
                    ? `hover:border-blue-950 hover:bg-sky-500 hover:text-blue-950`
                    : ""
            }`,
        secondary: (disabled: boolean) =>
            tw`border-amber-500 text-amber-500 ${
                !disabled
                    ? `hover:border-blue-950 hover:bg-amber-500 hover:text-blue-950`
                    : ""
            }`,
    },
    disabled: tw`cursor-not-allowed opacity-50`,
};

export const generateButtonStyles =
    ({ size = "md", variant = "primary", className }: SharedButtonProps) =>
    ({ isDisabled }: ButtonRenderProps) =>
        tw`${buttonStyles.main} ${buttonStyles.type[variant](isDisabled)} ${
            isDisabled ? buttonStyles.disabled : ""
        } ${buttonStyles.size[size]} ${className ? className : ""}`;
