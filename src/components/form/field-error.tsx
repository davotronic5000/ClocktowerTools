import { ReactNode } from "react";
import { FieldError as BaseFieldError } from "react-aria-components";

interface FieldErrorProps {
    children?: ReactNode;
}

const FieldError = ({ children }: FieldErrorProps) => {
    return (
        <BaseFieldError className="text-sm text-red-500">
            {children}
        </BaseFieldError>
    );
};

export default FieldError;
