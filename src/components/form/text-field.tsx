import {
    TextField as BaseTextField,
    TextFieldProps as BaseTextFieldProps,
    FieldError,
    Input,
} from "react-aria-components";
import { RefCallBack } from "react-hook-form";
import FieldLabel from "./field-label";

interface TextFieldProps extends BaseTextFieldProps {
    ref: RefCallBack;
    label: string;
    errorMessage?: string;
}

const TextField = ({ ref, errorMessage, label, ...rest }: TextFieldProps) => {
    return (
        <BaseTextField
            {...rest}
            validationBehavior="aria"
            className="flex flex-col"
        >
            <FieldLabel>{label}</FieldLabel>
            <Input
                ref={ref}
                className="border border-gray-600 bg-gray-900 p-2 invalid:border-red-500"
            />
            <FieldError>{errorMessage}</FieldError>
        </BaseTextField>
    );
};

export default TextField;
