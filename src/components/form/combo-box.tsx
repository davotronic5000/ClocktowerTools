"use client";
import {
    ComboBox as BaseComboBox,
    ComboBoxProps as BaseComboBoxProps,
    Button,
    Collection,
    Header,
    Input,
    ListBox,
    ListBoxItem,
    Section,
} from "react-aria-components";
import Popover from "../popover/popover";
import FieldLabel from "./field-label";

export type option = { id: string; name: string; href?: string };
export type section = { id: string; name: string; children: option[] };

interface ComboBoxProps<T extends object> extends BaseComboBoxProps<T> {
    sections?: section[];
    options?: option[];
    label: string;
}

const ComboBox = <T extends object>({
    sections,
    options,
    label,
    ...rest
}: ComboBoxProps<T>) => {
    return (
        <BaseComboBox
            className="flex flex-col text-sm"
            menuTrigger="focus"
            {...rest}
        >
            <FieldLabel>{label}</FieldLabel>
            <div className="flex items-stretch justify-between  bg-gray-900">
                <Input className="border border-gray-600 bg-gray-900 px-2 py-1 outline-none invalid:border-red-500 focus:border-gray-400" />
                <Button className="border border-l-0 border-gray-600 bg-gray-900 px-2 py-1 text-xs focus:border-gray-400">
                    ▼
                </Button>
            </div>
            <Popover placement="bottom" size="sm">
                {sections && (
                    <ListBox
                        items={sections}
                        selectionMode="single"
                        className="flex flex-col text-sm outline-none"
                    >
                        {(section) => {
                            return (
                                <Section
                                    id={section.id}
                                    className="flex flex-col"
                                >
                                    <Header className="text-xs font-bold uppercase">
                                        {section.name}
                                    </Header>
                                    <Collection items={section.children}>
                                        {section.children.map((item) => (
                                            <ListBoxItem
                                                key={item.id}
                                                className="display-block px-4 outline-none focus:bg-slate-400 focus:text-indigo-950"
                                                href={item.href}
                                            >
                                                {item.name}
                                            </ListBoxItem>
                                        ))}
                                    </Collection>
                                </Section>
                            );
                        }}
                    </ListBox>
                )}
                {options && (
                    <ListBox
                        items={options}
                        selectionMode="single"
                        className="flex flex-col text-sm outline-none"
                    >
                        {(item) => {
                            return (
                                <ListBoxItem
                                    className="display-block px-4 outline-none focus:bg-slate-400 focus:text-indigo-950"
                                    href={item.href}
                                >
                                    {item.name}
                                </ListBoxItem>
                            );
                        }}
                    </ListBox>
                )}
            </Popover>
        </BaseComboBox>
    );
};

export default ComboBox;
