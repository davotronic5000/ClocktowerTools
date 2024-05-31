"use client";
import { Button } from "@/components/button";
import FileUpload from "@/components/file-upload/file-upload";
import { Fragment, useCallback } from "react";
import convertScriptToJSON from "./convert-script-to-json";
import { reset, updateFile, updateJSON } from "./json-upload-actions";
import StageNavigation from "./stage-navigation";
import { useJSONContext, useJSONDispatchContext } from "./use-json-context";

const FileUploadStage = () => {
    const { file } = useJSONContext();
    const dispatchJSONAction = useJSONDispatchContext();
    const resetFile = useCallback(
        () => dispatchJSONAction(reset),
        [dispatchJSONAction],
    );
    const update = useCallback(
        async (file: File) => {
            dispatchJSONAction(updateFile(file));
        },
        [dispatchJSONAction],
    );
    const moveToConfig = useCallback(async () => {
        if (file) {
            const json = await convertScriptToJSON(file);
            if (json) {
                dispatchJSONAction(updateJSON(json));
            }
        }
    }, [dispatchJSONAction, file]);
    return (
        <Fragment>
            <FileUpload file={file} updateFile={update} resetFile={resetFile} />
            <StageNavigation>
                <Button isDisabled={!file} onPress={() => moveToConfig()}>
                    Continue
                </Button>
            </StageNavigation>
        </Fragment>
    );
};

export default FileUploadStage;
