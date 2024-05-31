import {
    NumberField as BaseNumberField,
    NumberFieldProps as BaseNumberFieldProps,
    Button,
    Group,
    Input,
} from "react-aria-components";
import { RefCallBack } from "react-hook-form";
import FieldError from "./field-error";
import FieldLabel from "./field-label";

interface NumberFieldProps extends BaseNumberFieldProps {
    inputRef: RefCallBack;
    label: string;
    errorMessage?: string;
}

const NumberField = ({
    inputRef,
    label,
    errorMessage,
    onChange,
    minValue,
    ...rest
}: NumberFieldProps) => {
    return (
        <BaseNumberField
            {...rest}
            minValue={minValue}
            onChange={
                onChange
                    ? (value) =>
                          Number.isNaN(value)
                              ? onChange(minValue || 0)
                              : onChange(value)
                    : undefined
            }
            validationBehavior="aria"
            className="flex flex-col text-sm"
        >
            <FieldLabel>{label}</FieldLabel>
            <Group>
                <Button
                    slot="decrement"
                    className="border border-gray-600 bg-gray-900 px-2 py-1"
                >
                    -
                </Button>
                <Input
                    ref={inputRef}
                    className="border border-gray-600 bg-gray-900 px-2 py-1 invalid:border-red-500"
                />
                <Button
                    slot="increment"
                    className="border border-gray-600 bg-gray-900 px-2 py-1"
                >
                    +
                </Button>
            </Group>

            <FieldError>{errorMessage}</FieldError>
        </BaseNumberField>
    );
};

export default NumberField;
