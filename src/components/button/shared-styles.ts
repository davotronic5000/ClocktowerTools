import { tw } from "@/utilities/tailwind";

export interface SharedButtonProps {
    size?: "sm" | "md";
    className?: string;
}

export const buttonStyles = {
    main: tw`shadow-lg shadow-blue-950/50 bg-blue-950 uppercase text-sky-500 border-solid border-sky-500 border-2 font-bold hover:bg-sky-500 hover:text-blue-950 hover:border-blue-950 transition-colors duration-700`,
    size: {
        sm: tw`px-2 py-1 text-xs`,
        md: tw`px-4 py-2`,
    },
};

export const generateButtonStyles = ({
    size = "md",
    className,
}: SharedButtonProps) =>
    tw`${buttonStyles.main} ${buttonStyles.size[size]} ${
        className ? className : ""
    }`;
