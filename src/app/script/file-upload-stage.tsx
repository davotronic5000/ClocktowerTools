"use client";
import { Button } from "@/components/button";
import FileUpload from "@/components/file-upload/file-upload";
import { Fragment, useCallback } from "react";
import {
    scriptReset,
    scriptUpdateFile,
    scriptUpdateStage,
} from "./_script-context/script-context-actions";
import {
    useScriptContext,
    useScriptDispatchContext,
} from "./_script-context/use-script-context";
import ScriptStageNavigation from "./script-stage-navigation";

const FileUploadStage = () => {
    const { scriptJSON } = useScriptContext();
    const dispatchScriptAction = useScriptDispatchContext();
    const resetScript = useCallback(
        () => dispatchScriptAction(scriptReset),
        [dispatchScriptAction],
    );
    const updateScript = useCallback(
        (file: File) => dispatchScriptAction(scriptUpdateFile(file)),
        [dispatchScriptAction],
    );
    const moveToConfig = useCallback(
        () => dispatchScriptAction(scriptUpdateStage("config")),
        [dispatchScriptAction],
    );
    return (
        <Fragment>
            <FileUpload
                file={scriptJSON}
                updateFile={updateScript}
                resetFile={resetScript}
            />
            <ScriptStageNavigation>
                <Button isDisabled={!scriptJSON} onPress={() => moveToConfig()}>
                    Continue
                </Button>
            </ScriptStageNavigation>
        </Fragment>
    );
};

export default FileUploadStage;
