import { tw } from "@/utilities/tailwind";

export interface SharedButtonProps {
    size?: "sm" | "md";
    className?: string;
    type?: "primary" | "secondary";
}

export const buttonStyles = {
    main: tw`border-2 border-solid border-sky-500 font-bold uppercase text-sky-500 shadow-lg shadow-blue-950/50 transition-colors duration-700 hover:border-blue-950 hover:bg-sky-500 hover:text-blue-950`,
    size: {
        sm: tw`px-2 py-1 text-xs`,
        md: tw`px-4 py-2`,
    },
    type: tw`bg-blue-950`,
};

export const generateButtonStyles = ({
    size = "md",
    type = "primary",
    className,
}: SharedButtonProps) =>
    tw`${buttonStyles.main} ${buttonStyles.size[size]} ${
        className ? className : ""
    }`;
