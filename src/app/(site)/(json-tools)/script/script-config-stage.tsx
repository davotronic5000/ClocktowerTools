"use client";
import { Button } from "@/components/button";
import {
    useJSONContext,
    useJSONDispatchContext,
} from "@/components/json-upload/use-json-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import ScriptStageNavigation from "./script-stage-navigation";

export const scriptFormSchema = z.object({
    name: z.string().trim().min(1, "A script name is required"),
    colour: z.string().trim().min(1),
    colourise: z.boolean().optional(),
});

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
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ScriptFormType>({
        resolver: zodResolver(scriptFormSchema),
    });
    return (
        <Fragment>
            Script: {json?.name}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    defaultValue={json?.name || "Custom Script"}
                    {...register("name")}
                />
                {errors.name && <span>{errors.name?.message}</span>}
                <input
                    defaultValue={json?.scriptColourOptions?.colour}
                    {...register("colour")}
                />
                {errors.colour && <span>{errors.colour.message}</span>}
                <ScriptStageNavigation>
                    <Button type="submit">Submit</Button>
                </ScriptStageNavigation>
            </form>
        </Fragment>
    );
};

export default ScriptConfigStage;
