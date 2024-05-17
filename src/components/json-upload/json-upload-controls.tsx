"use client";
import { useJSONContext } from "@/components/json-upload/use-json-context";
import { ReactNode } from "react";
import FileUploadStage from "./file-upload-stage";

interface JSONUploadControlsProps {
    children: ReactNode;
}

const JSONUploadControls = ({ children }: JSONUploadControlsProps) => {
    const { json } = useJSONContext();
    if (!json) {
        return <FileUploadStage />;
    }
    return children;
};

export default JSONUploadControls;
