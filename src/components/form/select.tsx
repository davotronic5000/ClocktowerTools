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
        <BaseSelect className="flex flex-col" {...rest}>
            <FieldLabel>{label}</FieldLabel>
            <Button className="flex justify-between border border-gray-600 bg-gray-900 p-2 invalid:border-red-500">
                <SelectValue />
                <span aria-hidden="true">▼</span>
            </Button>
            <Popover placement="bottom">
                <ListBox items={options} selectionMode="single">
                    {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                </ListBox>
            </Popover>
        </BaseSelect>
    );
};

export default Select;
