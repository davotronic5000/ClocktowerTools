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
            <div className="mt-4 flex justify-between border-t border-solid border-gray-200 pt-4">
                <Button variant="secondary" onPress={resetScript}>
                    Reset
                </Button>
                <Button isDisabled={!scriptJSON} onPress={() => moveToConfig()}>
                    Continue
                </Button>
            </div>
        </Fragment>
    );
};

export default FileUploadStage;
