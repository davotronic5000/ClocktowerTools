"use client";
import { Button } from "@/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { scriptUpdatePDF } from "./_script-context/script-context-actions";
import {
    useScriptContext,
    useScriptDispatchContext,
} from "./_script-context/use-script-context";
import ScriptStageNavigation from "./script-stage-navigation";
import { submitScript } from "./script-submission";

export const scriptFormSchema = z.object({
    name: z.string().trim().min(1, "A script name is required"),
    colour: z.string().trim().min(1),
    colourise: z.boolean().optional(),
});

export type ScriptFormType = z.infer<typeof scriptFormSchema>;

const ScriptConfigStage = () => {
    const { scriptFile, scriptJSON } = useScriptContext();
    const dispatchScriptAction = useScriptDispatchContext();
    const onSubmit: SubmitHandler<ScriptFormType> = async (data) => {
        if (scriptJSON) {
            const pdfResponse = await submitScript(scriptJSON, data);
            if (pdfResponse) {
                dispatchScriptAction(scriptUpdatePDF(pdfResponse));
            }
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
            Script: {scriptFile?.name}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    defaultValue={scriptJSON?.name || "Custom Script"}
                    {...register("name")}
                />
                {errors.name && <span>{errors.name?.message}</span>}
                <input
                    defaultValue={scriptJSON?.colour}
                    {...register("colour")}
                />
                {errors.colour && <span>{errors.colour?.message}</span>}
                <input type="checkbox" {...register("colourise")} />
                {errors.colourise && <span>{errors.colourise?.message}</span>}
                <ScriptStageNavigation>
                    <Button type="submit">Submit</Button>
                </ScriptStageNavigation>
            </form>
        </Fragment>
    );
};

export default ScriptConfigStage;
