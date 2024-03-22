"use client";
import { ReactNode } from "react";
import {
    Button as ButtonAria,
    ButtonProps as ButtonAriaProps,
} from "react-aria-components";
import {
    SharedButtonProps,
    buttonStyles,
    generateButtonStyles,
} from "./shared-styles";

interface ButtonProps extends SharedButtonProps, ButtonAriaProps {
    loading?: boolean;
    children: ReactNode;
}

const Button = ({
    children,
    size = "md",
    className,
    variant = "primary",
    loading,
    isDisabled,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonAria
            className={generateButtonStyles({
                size,
                className,
                loading,
                variant,
            })}
            {...rest}
            isDisabled={isDisabled || loading}
        >
            {children}
            {loading && (
                <span className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-1">
                    <span
                        className={`${buttonStyles.loading[size]} animate-pulse rounded-full ${buttonStyles.loading[variant]} [animation-delay:-0.5s]`}
                    ></span>
                    <span
                        className={`${buttonStyles.loading[size]} animate-pulse rounded-full ${buttonStyles.loading[variant]} [animation-delay:-0.25s]`}
                    ></span>
                    <span
                        className={`${buttonStyles.loading[size]} animate-pulse rounded-full ${buttonStyles.loading[variant]}`}
                    ></span>
                </span>
            )}
        </ButtonAria>
    );
};

export default Button;
