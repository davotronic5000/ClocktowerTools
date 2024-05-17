import { tw } from "@/utilities/tailwind";
import { ButtonRenderProps, LinkRenderProps } from "react-aria-components";

export interface SharedButtonProps {
    size?: "sm" | "md";
    variant?: "primary" | "secondary";
    loading?: boolean;
}

export const buttonStyles = {
    main: tw`relative border-2 border-solid font-bold uppercase shadow-lg shadow-blue-950/50 transition-colors duration-700`,
    size: {
        sm: tw`px-2 py-1 text-xs`,
        md: tw`px-4 py-2`,
    },
    type: {
        primary: (disabled: boolean, loading: boolean) =>
            tw` border-sky-500 bg-blue-950  ${
                !disabled
                    ? `text-sky-500 hover:border-blue-950 hover:bg-sky-500 hover:text-blue-950`
                    : `text-sky-700 ${!loading ? "border-sky-700" : ""}`
            }`,
        secondary: (disabled: boolean, loading: boolean) =>
            tw`border-amber-500 bg-blue-950  ${
                !disabled
                    ? `text-amber-500 hover:border-blue-950 hover:bg-amber-500 hover:text-blue-950`
                    : `text-amber-800 ${!loading ? "border-amber-800" : ""}`
            }`,
    },
    loading: {
        primary: "bg-sky-500",
        secondary: "bg-amber-500",
        sm: "h-2.5 w-2.5",
        md: "h-3 w-3",
    },
    disabled: tw`cursor-not-allowed`,
};

export const generateButtonStyles =
    <RP extends ButtonRenderProps | LinkRenderProps>({
        size = "md",
        variant = "primary",
        loading = false,
        className,
    }: SharedButtonProps & { className?: string | ((props: RP) => string) }) =>
    (renderProps: RP) =>
        tw`${buttonStyles.main} ${buttonStyles.type[variant](
            renderProps.isDisabled,
            loading,
        )} ${renderProps.isDisabled ? buttonStyles.disabled : ""} ${
            buttonStyles.size[size]
        } ${
            typeof className === "function"
                ? className(renderProps)
                : className || ""
        }`;
