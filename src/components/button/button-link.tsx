import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ComponentType } from "react";
import { SharedButtonProps, generateButtonStyles } from "./shared-styles";

interface ButtonLinkProps
    extends SharedButtonProps,
        LinkProps,
        Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {}

const ButtonLink: ComponentType<ButtonLinkProps> = ({
    children,
    size,
    className,
    ...rest
}) => {
    return (
        <Link className={generateButtonStyles({ size, className })} {...rest}>
            {children}
        </Link>
    );
};

export default ButtonLink;
