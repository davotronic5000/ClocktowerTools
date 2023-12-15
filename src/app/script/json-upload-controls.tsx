"use client";
import { useScriptContext } from "./_script-context/use-script-context";
import FileUploadStage from "./file-upload-stage";
import ScriptConfigStage from "./script-config-stage";

const JSONUploadControls = () => {
    const { stage } = useScriptContext();
    if (stage === "upload") {
        return <FileUploadStage />;
    }
    if (stage === "config") {
        return <ScriptConfigStage />;
    }
    return "Something went wrong";
};

export default JSONUploadControls;
