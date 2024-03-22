"use client";
import { Button } from "@/components/button";
import FileUpload from "@/components/file-upload/file-upload";
import { Fragment, useCallback } from "react";
import {
    scriptReset,
    scriptUpdateFile,
    scriptUpdateJSON,
    scriptUpdateStage,
} from "./_script-context/script-context-actions";
import {
    useScriptContext,
    useScriptDispatchContext,
} from "./_script-context/use-script-context";
import convertScriptToJSON from "./convert-script-to-json";
import ScriptStageNavigation from "./script-stage-navigation";

const FileUploadStage = () => {
    const { scriptFile } = useScriptContext();
    const dispatchScriptAction = useScriptDispatchContext();
    const resetScript = useCallback(
        () => dispatchScriptAction(scriptReset),
        [dispatchScriptAction],
    );
    const updateScript = useCallback(
        async (file: File) => {
            dispatchScriptAction(scriptUpdateFile(file));
        },
        [dispatchScriptAction],
    );
    const moveToConfig = useCallback(async () => {
        if (scriptFile) {
            const json = await convertScriptToJSON(scriptFile);
            if (json) {
                dispatchScriptAction(scriptUpdateJSON(json));
            }
            dispatchScriptAction(scriptUpdateStage("config"));
        }
    }, [dispatchScriptAction, scriptFile]);
    return (
        <Fragment>
            <FileUpload
                file={scriptFile}
                updateFile={updateScript}
                resetFile={resetScript}
            />
            <ScriptStageNavigation>
                <Button isDisabled={!scriptFile} onPress={() => moveToConfig()}>
                    Continue
                </Button>
            </ScriptStageNavigation>
        </Fragment>
    );
};

export default FileUploadStage;
