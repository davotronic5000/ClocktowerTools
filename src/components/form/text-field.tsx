import {
    TextField as BaseTextField,
    TextFieldProps as BaseTextFieldProps,
    FieldError,
    Input,
} from "react-aria-components";
import { RefCallBack } from "react-hook-form";
import FieldLabel from "./field-label";

interface TextFieldProps extends BaseTextFieldProps {
    inputRef: RefCallBack;
    label: string;
    errorMessage?: string;
}

const TextField = ({
    inputRef,
    errorMessage,
    label,
    ...rest
}: TextFieldProps) => {
    return (
        <BaseTextField
            {...rest}
            validationBehavior="aria"
            className="flex flex-col text-sm"
        >
            <FieldLabel>{label}</FieldLabel>
            <Input
                ref={inputRef}
                className="border border-gray-600 bg-gray-900 px-2 py-1 invalid:border-red-500"
            />
            <FieldError>{errorMessage}</FieldError>
        </BaseTextField>
    );
};

export default TextField;
