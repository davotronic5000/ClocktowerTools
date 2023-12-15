"use client";
import { ReactNode } from "react";
import {
    Button as ButtonAria,
    ButtonProps as ButtonAriaProps,
} from "react-aria-components";
import { SharedButtonProps, generateButtonStyles } from "./shared-styles";

interface ButtonProps extends SharedButtonProps, ButtonAriaProps {
    children: ReactNode;
}

const Button = ({
    children,
    size,
    className,
    variant,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonAria
            className={generateButtonStyles({
                size,
                className,
                variant,
            })}
            {...rest}
        >
            {children}
        </ButtonAria>
    );
};

export default Button;
