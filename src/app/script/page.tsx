"use client";
import SideBar from "@/components/sidebar/sidebar";
import ScriptContextProvider from "./_script-context/script-context-provider";
import JSONUploadControls from "./json-upload-controls";
import PDFViewer from "./pdf-viewer";

const Page = () => {
    return (
        <div className="flex grow overflow-auto">
            <ScriptContextProvider>
                <SideBar heading="Script Tool Options">
                    <JSONUploadControls />
                </SideBar>
                <PDFViewer />
            </ScriptContextProvider>
        </div>
    );
};

export default Page;
