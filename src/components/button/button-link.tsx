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
            className={`btn btn-primary border-double border-neutral-content font-bold hover:border-primary-content ${
                className ? className : ""
            }`}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
