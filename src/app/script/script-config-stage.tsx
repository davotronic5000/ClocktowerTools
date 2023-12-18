"use client";
import { Button } from "@/components/button";
import { Fragment } from "react";
import { useFormState } from "react-dom";
import { useScriptContext } from "./_script-context/use-script-context";
import ScriptStageNavigation from "./script-stage-navigation";
import { submitScript } from "./script-submission";

const ScriptConfigStage = () => {
    const { scriptFile, scriptJSON } = useScriptContext();
    const [form, formAction] = useFormState(submitScript, null);
    return (
        <Fragment>
            Script: {scriptFile?.name}
            <form action={formAction}>
                <ScriptStageNavigation>
                    <Button type="submit">Submit</Button>
                </ScriptStageNavigation>
            </form>
            <div>{JSON.stringify(form)}</div>
        </Fragment>
    );
};

export default ScriptConfigStage;
