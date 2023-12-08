"use client";
import { ComponentType } from "react";
import { Link, LinkProps as LinkAriaProps } from "react-aria-components";
import { SharedButtonProps, generateButtonStyles } from "./shared-styles";

interface ButtonLinkProps
    extends SharedButtonProps,
        Omit<LinkAriaProps, "className"> {}

const ButtonLink: ComponentType<ButtonLinkProps> = ({
    children,
    size,
    variant,
    className,
    ...rest
}) => {
    return (
        <Link
            className={generateButtonStyles({ size, variant, className })}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
