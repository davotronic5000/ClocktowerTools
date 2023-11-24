import { ButtonHTMLAttributes } from "react";
import { SharedButtonProps, generateButtonStyles } from "./shared-styles";

interface ButtonProps
    extends SharedButtonProps,
        ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
    children,
    size,
    className,
    disabled = false,
    type,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={generateButtonStyles({
                size,
                className,
                type,
                disabled,
            })}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
