"use client";
import { Button } from "@/components/button";
import { Fragment } from "react";
import { useScriptContext } from "./_script-context/use-script-context";
import ScriptStageNavigation from "./script-stage-navigation";

const ScriptConfigStage = () => {
    const { scriptFile } = useScriptContext();
    return (
        <Fragment>
            Script: {scriptFile?.name}
            <ScriptStageNavigation>
                <Button onPress={() => {}}>Submit</Button>
            </ScriptStageNavigation>
        </Fragment>
    );
};

export default ScriptConfigStage;
