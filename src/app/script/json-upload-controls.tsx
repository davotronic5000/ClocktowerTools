"use client";
import { useScriptContext } from "./_script-context/use-script-context";
import FileUploadStage from "./file-upload-stage";

const JSONUploadControls = () => {
    const { stage } = useScriptContext();
    if (stage === "upload") {
        return <FileUploadStage />;
    }
    if (stage === "config") {
        return "Blah";
    }
    return "Something went wrong";
};

export default JSONUploadControls;
