import { ButtonHTMLAttributes } from "react";
import { SharedButtonProps, generateButtonStyles } from "./shared-styles";

interface ButtonProps
    extends SharedButtonProps,
        ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, size, className, ...rest }: ButtonProps) => {
    return (
        <button className={generateButtonStyles({ size, className })} {...rest}>
            {children}
        </button>
    );
};

export default Button;
