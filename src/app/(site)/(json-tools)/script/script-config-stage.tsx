"use client";
import { Button } from "@/components/button";
import ColourPicker from "@/components/form/colour-picker";
import FieldError from "@/components/form/field-error";
import FieldLabel from "@/components/form/field-label";
import StageNavigation from "@/components/json-upload/stage-navigation";
import { useJSONContext } from "@/components/json-upload/use-json-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { Form, Input, TextField } from "react-aria-components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export const scriptFormSchema = z.object({
    name: z.string().trim().min(1, "A script name is required"),
    colour: z.string().trim().min(1),
    colourise: z.boolean().optional(),
});

export type ScriptFormType = z.infer<typeof scriptFormSchema>;

const ScriptConfigStage = () => {
    const { json } = useJSONContext();
    const onSubmit: SubmitHandler<ScriptFormType> = async (data) => {
        if (json) {
            console.log("TODO: Update Options for script");
        } else {
            toast.error("No Script JSON available");
        }
    };
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ScriptFormType>({
        mode: "onBlur",
        resolver: zodResolver(scriptFormSchema),
        defaultValues: {
            name: json?.name || "Custom Script",
            colour: "#f4f4f4",
        },
    });
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                            validationBehavior="aria"
                            isInvalid={invalid}
                            className="flex flex-col"
                        >
                            <FieldLabel>Name</FieldLabel>
                            <Input
                                ref={ref}
                                className="border border-gray-600 bg-gray-900 p-2 invalid:border-red-500"
                            />
                            <FieldError>{error?.message}</FieldError>
                        </TextField>
                    )}
                />
                <Controller
                    control={control}
                    name="colour"
                    render={({
                        field: { name, value, onChange, onBlur, ref },
                        fieldState: { invalid, error },
                    }) => (
                        <Fragment>
                            <ColourPicker
                                label="Colour"
                                name={name}
                                value={value}
                                onChange={onChange}
                                // onBlur={onBlur}
                                // validationBehavior="aria"
                                // isInvalid={invalid}
                            />
                        </Fragment>
                    )}
                />
                <StageNavigation>
                    <Button type="submit">Submit</Button>
                </StageNavigation>
            </Form>
        </Fragment>
    );
};

export default ScriptConfigStage;
