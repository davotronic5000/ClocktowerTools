"use client";
import ColourPicker from "@/components/form/colour-picker";
import Select from "@/components/form/select";
import TextField from "@/components/form/text-field";
import { updateScriptConfig } from "@/components/json-upload/json-upload-actions";
import StageNavigation from "@/components/json-upload/stage-navigation";
import {
    ColourBlendType,
    hexCode,
} from "@/components/json-upload/universal-json-validator";
import {
    useJSONContext,
    useJSONDispatchContext,
} from "@/components/json-upload/use-json-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useEffect } from "react";
import { Form } from "react-aria-components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export const scriptFormSchema = z.object({
    name: z.string().trim().min(1, "A script name is required"),
    author: z.string().optional(),
    colour: hexCode,
    secondaryColour: hexCode.optional(),
    blendMode: ColourBlendType,
});

const colourBlendOptions = [
    { id: "normal", name: "Normal" },
    { id: "multiply", name: "Multiply" },
    { id: "screen", name: "Screen" },
    { id: "overlay", name: "Overlay" },
    { id: "darken", name: "Darken" },
    { id: "lighten", name: "Lighten" },
    { id: "color-dodge", name: "Colour Dodge" },
    { id: "color-burn", name: "Colour Burn" },
    { id: "hard-light", name: "Hard Light" },
    { id: "soft-light", name: "Soft Light" },
    { id: "difference", name: "Difference" },
    { id: "exclusion", name: "Exclusion" },
    { id: "hue", name: "Hue" },
    { id: "saturation", name: "Saturation" },
    { id: "color", name: "Colour" },
    { id: "luminosity", name: "Luminosity" },
];

export type ScriptFormType = z.infer<typeof scriptFormSchema>;

const ScriptConfigStage = () => {
    const { json } = useJSONContext();
    const dispatchJSONAction = useJSONDispatchContext();
    const onSubmit: SubmitHandler<ScriptFormType> = async (data) => {
        if (json) {
            console.log("TODO: Update Options for script");
        } else {
            toast.error("No Script JSON available");
        }
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm<ScriptFormType>({
        mode: "onBlur",
        resolver: zodResolver(scriptFormSchema),
        defaultValues: {
            name: json?.name || "Custom Script",
            author: json?.author,
            colour: json?.scriptColourOptions.colour || "#0524ED",
            blendMode: json?.scriptColourOptions.colourBlendType,
        },
    });

    useEffect(() => {
        watch((data) => {
            dispatchJSONAction(updateScriptConfig(data));
        });
    }, [watch, dispatchJSONAction]);
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
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
                    name="author"
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
                            label="Author"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="colour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Primary Colour"
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
                    name="secondaryColour"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Secondary Colour"
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
                    name="blendMode"
                    render={({
                        field: { name, value, onChange },
                        fieldState: { error },
                    }) => (
                        <Select
                            name={name}
                            selectedKey={value}
                            onSelectionChange={onChange}
                            options={colourBlendOptions}
                            label="Blend Mode"
                        />
                    )}
                />
                <StageNavigation />
            </Form>
        </Fragment>
    );
};

export default ScriptConfigStage;
