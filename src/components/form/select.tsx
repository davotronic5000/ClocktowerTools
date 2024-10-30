import {
    Select as BaseSelect,
    SelectProps as BaseSelectProps,
    Button,
    ListBox,
    ListBoxItem,
    SelectValue,
} from "react-aria-components";
import Popover from "../popover/popover";
import FieldLabel from "./field-label";

interface SelectProps<T extends object> extends BaseSelectProps<T> {
    options: { id: string; name: string }[];
    label: string;
}

const Select = <T extends object>({
    options,
    label,
    ...rest
}: SelectProps<T>) => {
    return (
        <BaseSelect className="flex flex-col text-sm" {...rest}>
            <FieldLabel>{label}</FieldLabel>
            <Button className="flex items-center justify-between border border-gray-600 bg-gray-900 px-2 py-1 outline-none invalid:border-red-500 focus:border-gray-400">
                <SelectValue />
                <span aria-hidden="true" className="text-xs">
                    ▼
                </span>
            </Button>
            <Popover placement="bottom" size="sm">
                <ListBox
                    items={options}
                    selectionMode="single"
                    className="text-sm outline-none"
                >
                    {(item) => (
                        <ListBoxItem className="px-4 outline-none focus:bg-slate-400 focus:text-indigo-950">
                            {item.name}
                        </ListBoxItem>
                    )}
                </ListBox>
            </Popover>
        </BaseSelect>
    );
};

export default Select;
