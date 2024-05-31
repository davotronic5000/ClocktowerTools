import ColourPicker from "@/components/form/colour-picker";
import NumberField from "@/components/form/number-field";
import Select from "@/components/form/select";
import Switch from "@/components/form/switch";
import TextField from "@/components/form/text-field";
import { Icon } from "@/components/icon";
import { updateTokenConfig } from "@/components/json-upload/json-upload-actions";
import {
    ScriptJSONSchemaType,
    hexCode,
} from "@/components/json-upload/universal-json-validator";
import { useJSONDispatchContext } from "@/components/json-upload/use-json-context";
import {
    FontSize,
    symbolStringValidator,
} from "@/components/tokens/validators/token-tool-schema";
import { Heading } from "@/components/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useEffect } from "react";
import { Form } from "react-aria-components";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface TokenConfigFormProps {
    json: ScriptJSONSchemaType;
}

export const tokenFormSchema = z.object({
    name: z.string().trim().min(1, "A script name is required"),
    pageHeight: z.number().min(1),
    pageWidth: z.number().min(1),
    pageMargin: z.number().min(0),
    tokenRoleSize: z.number().min(1),
    tokenRoleMargin: z.number().min(0),
    tokenRoleImageBMargin: z.number().min(0),
    tokenReminderSize: z.number().min(1),
    tokenReminderMargin: z.number().min(0),
    tokenReminderImageBMargin: z.number().min(0),
    tokenSpacerMargin: z.number().min(0),
    fontColour: hexCode,
    fontSizeRole: FontSize,
    fontSizeReminder: FontSize,
    setupIcon: symbolStringValidator,
    setupColour: hexCode,
    fnIcon: symbolStringValidator,
    fnColour: hexCode,
    onIcon: symbolStringValidator,
    onColour: hexCode,
    remIcon: symbolStringValidator,
    remColour: hexCode,
    borderColour: hexCode,
    alpha: z.number().min(0).max(1),
    circleBorder: z.boolean(),
    squareBorder: z.boolean(),
    borderThickness: z.number().min(0),
    tokenBackground: z.boolean(),
});

const fontSizeOptions = [
    { id: "text-xs", name: "Extra Small" },
    { id: "text-sm", name: "Small" },
    { id: "text-base", name: "Medium" },
    { id: "text-lg", name: "Large" },
    { id: "text-xl", name: "Extra Large" },
    { id: "text-2xl", name: "2XL" },
    { id: "text-3xl", name: "3XL" },
    { id: "text-4xl", name: "4XL" },
    { id: "text-5xl", name: "5XL" },
    { id: "text-6xl", name: "6XL" },
    { id: "text-7xl", name: "7XL" },
    { id: "text-8xl", name: "8XL" },
    { id: "text-9xl", name: "9XL" },
];

export type TokenFormType = z.infer<typeof tokenFormSchema>;

const TokenConfigForm = ({ json }: TokenConfigFormProps) => {
    const dispatchjsonAction = useJSONDispatchContext();
    console.log(json);
    const { control, watch } = useForm<TokenFormType>({
        mode: "onBlur",
        resolver: zodResolver(tokenFormSchema),
        defaultValues: {
            name: json.name || "Custom Script",
            pageHeight: json.tokenConfig.page.height,
            pageWidth: json.tokenConfig.page.width,
            pageMargin: json.tokenConfig.page.margin,
            tokenRoleSize: json.tokenConfig.tokenSizes.role.tokenSize,
            tokenRoleMargin: json.tokenConfig.tokenSizes.role.tokenMargin,
            tokenRoleImageBMargin:
                json.tokenConfig.tokenSizes.role.tokenImageBMargin,
            tokenReminderSize: json.tokenConfig.tokenSizes.reminder.tokenSize,
            tokenReminderMargin:
                json.tokenConfig.tokenSizes.reminder.tokenMargin,
            tokenReminderImageBMargin:
                json.tokenConfig.tokenSizes.reminder.tokenImageBMargin,
            tokenSpacerMargin: json.tokenConfig.tokenSizes.tokenSpacerMargin,
            fontColour: json.tokenConfig.tokenStyles.fontColour,
            fontSizeRole: json.tokenConfig.tokenStyles.fontSize.role,
            fontSizeReminder: json.tokenConfig.tokenStyles.fontSize.reminder,
            setupIcon: json.tokenConfig.tokenStyles.setup.icon,
            setupColour: json.tokenConfig.tokenStyles.setup.colour,
            fnIcon: json.tokenConfig.tokenStyles.firstNight.icon,
            fnColour: json.tokenConfig.tokenStyles.firstNight.colour,
            onIcon: json.tokenConfig.tokenStyles.otherNight.icon,
            onColour: json.tokenConfig.tokenStyles.otherNight.colour,
            remIcon: json.tokenConfig.tokenStyles.reminder.icon,
            remColour: json.tokenConfig.tokenStyles.reminder.colour,
            borderColour: json.tokenConfig.tokenStyles.border.colour,
            alpha: json.tokenConfig.tokenStyles.border.alpha,
            circleBorder: json.tokenConfig.tokenStyles.border.circleBorder,
            squareBorder: json.tokenConfig.tokenStyles.border.squareBorder,
            borderThickness: json.tokenConfig.tokenStyles.border.thickness,
            tokenBackground: json.tokenConfig.tokenStyles.tokenBackground,
        },
    });

    useEffect(() => {
        watch((data) => {
            dispatchjsonAction(updateTokenConfig(data as TokenFormType));
        });
    }, [watch, dispatchjsonAction]);
    return (
        <Fragment>
            <Form className="space-y-2">
                <Controller
                    control={control}
                    name="name"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <TextField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Name"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="tokenBackground"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Switch
                            name={name}
                            label="Token Background"
                            onChange={onChange}
                            isSelected={value}
                            errorMessage={error?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="tokenSpacerMargin"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Spacer Margin (px)"
                            isRequired
                            minValue={0}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="alpha"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Border Alpha"
                            isRequired
                            minValue={0}
                            maxValue={1}
                            step={0.1}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="borderThickness"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Border Thickness (px)"
                            isRequired
                            minValue={0}
                            step={0.5}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="squareBorder"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Switch
                            name={name}
                            label="Square Border"
                            onChange={onChange}
                            isSelected={value}
                            errorMessage={error?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="circleBorder"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Switch
                            name={name}
                            label="Circle Border"
                            onChange={onChange}
                            isSelected={value}
                            errorMessage={error?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="borderColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Border Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                            {error && error.message}
                        </Fragment>
                    )}
                />
                <Controller
                    control={control}
                    name="fontColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Font Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                            {error && error.message}
                        </Fragment>
                    )}
                />
                <Heading as="h4">Advanced Role Token Options</Heading>
                <Controller
                    control={control}
                    name="tokenRoleSize"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Role Size (px)"
                            isRequired
                            minValue={1}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="tokenRoleMargin"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Role Margin (px)"
                            isRequired
                            minValue={0}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="tokenRoleImageBMargin"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Role Image Margin (px)"
                            isRequired
                            minValue={0}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="fontSizeRole"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Select
                            name={name}
                            selectedKey={value}
                            onSelectionChange={onChange}
                            options={fontSizeOptions}
                            label="Role Text Font Size"
                        />
                    )}
                />
                <Heading as="h4">Advanced Reminder Token Options</Heading>
                <Controller
                    control={control}
                    name="tokenReminderSize"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Reminder Size (px)"
                            isRequired
                            minValue={1}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="tokenRoleMargin"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Reminder Margin (px)"
                            isRequired
                            minValue={0}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="tokenRoleImageBMargin"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Token Reminder Image Margin (px)"
                            isRequired
                            minValue={0}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="fontSizeReminder"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Select
                            name={name}
                            selectedKey={value}
                            onSelectionChange={onChange}
                            options={fontSizeOptions}
                            label="Reminder Text Font Size"
                        />
                    )}
                />
                <Heading as="h4">Advanced Page Options</Heading>
                <p className="text-sm">
                    <Icon
                        type="exclamation-triangle"
                        size="xxs"
                        className="text-amber-500"
                    />{" "}
                    Caution, editing these values may lead to unpredictable
                    results. The default values mirror an A4 printing page.
                </p>
                <Controller
                    control={control}
                    name="pageHeight"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Page Height (px)"
                            isRequired
                            minValue={1}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="pageWidth"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Page Width (px)"
                            isRequired
                            minValue={1}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="pageMargin"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <NumberField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Page Margin (px)"
                            isRequired
                            minValue={1}
                        />
                    )}
                />
                <Heading as="h4">Reminder Pip Options</Heading>
                <Controller
                    control={control}
                    name="setupColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Setup Icon Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                            {error && error.message}
                        </Fragment>
                    )}
                />
                <Controller
                    control={control}
                    name="setupIcon"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <TextField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Setup Icon"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="remColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Reminder Icon Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                            {error && error.message}
                        </Fragment>
                    )}
                />
                <Controller
                    control={control}
                    name="remIcon"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <TextField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Reminder Icon"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="fnColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="First Night Icon Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                            {error && error.message}
                        </Fragment>
                    )}
                />
                <Controller
                    control={control}
                    name="fnIcon"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <TextField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="First Night Icon"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="onColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Other Night Icon Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                            {error && error.message}
                        </Fragment>
                    )}
                />
                <Controller
                    control={control}
                    name="onIcon"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <TextField
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={invalid}
                            inputRef={ref}
                            errorMessage={error?.message}
                            label="Other Night Icon"
                        />
                    )}
                />
            </Form>
        </Fragment>
    );
};

export default TokenConfigForm;
