import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ComponentType } from "react";

interface ButtonLinkProps
    extends LinkProps,
        Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

const ButtonLink: ComponentType<ButtonLinkProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <Link
            className={`shadow-lg shadow-blue-950/50 bg-blue-950 px-4 py-2 uppercase text-sky-500 border-solid border-sky-500 border-2 font-bold hover:bg-gray-800 transition-colours duration-500 ${
                className ? className : ""
            }`}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
