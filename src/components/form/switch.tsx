import {
    Switch as BaseSwitch,
    SwitchProps as BaseSwitchProps,
    FieldError,
} from "react-aria-components";
import FieldLabel from "./field-label";

interface SwitchProps extends BaseSwitchProps {
    label: string;
    errorMessage?: string;
}

const Switch = ({ label, errorMessage, ...rest }: SwitchProps) => {
    return (
        <div className="flex flex-col">
            <BaseSwitch className="group flex items-center gap-2" {...rest}>
                <div className="group-pressed:bg-amber-00 flex h-[26px] w-[44px] shrink-0 cursor-default rounded-full border border-gray-600 bg-gray-900 bg-clip-padding p-[3px] shadow-inner outline-none ring-gray-200 transition duration-200 ease-in-out group-focus-visible:ring-2 group-pressed:bg-amber-700 group-selected:bg-amber-500 group-selected:group-pressed:bg-amber-700 invalid:border-red-500">
                    <span className="h-[18px] w-[18px] translate-x-0 transform rounded-full bg-white shadow transition duration-200 ease-in-out group-selected:translate-x-[100%]" />
                </div>
                <FieldLabel>{label}</FieldLabel>
            </BaseSwitch>
            <FieldError>{errorMessage}</FieldError>
        </div>
    );
};

export default Switch;
