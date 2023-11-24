import { tw } from "@/utilities/tailwind";

export interface SharedButtonProps {
    size?: "sm" | "md";
    className?: string;
    type?: "primary" | "secondary";
    disabled?: boolean;
}

export const buttonStyles = {
    main: tw`border-2 border-solid font-bold uppercase shadow-lg shadow-blue-950/50 transition-colors duration-700`,
    size: {
        sm: tw`px-2 py-1 text-xs`,
        md: tw`px-4 py-2`,
    },
    type: {
        primary: tw`border-sky-500 bg-blue-950 text-sky-500 hover:border-blue-950 hover:bg-sky-500 hover:text-blue-950`,
        secondary: tw`border-amber-500 text-amber-500 hover:border-blue-950 hover:bg-amber-500 hover:text-blue-950`,
    },
    disabled: {
        main: tw`cursor-not-allowed opacity-50`,
    },
};

export const generateButtonStyles = ({
    size = "md",
    type = "primary",
    disabled = false,
    className,
}: SharedButtonProps) =>
    tw`${buttonStyles.main} ${buttonStyles.type[type]} ${
        disabled ? buttonStyles.disabled.main : ""
    } ${buttonStyles.size[size]} ${className ? className : ""}`;
