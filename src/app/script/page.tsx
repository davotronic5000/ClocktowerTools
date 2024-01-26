"use client";
import SideBar from "@/components/sidebar/sidebar";
import ScriptContextProvider from "./_script-context/script-context-provider";
import JSONUploadControls from "./json-upload-controls";
import Viewer from "./viewer";

const Page = () => {
    return (
        <div className="flex grow overflow-auto">
            <ScriptContextProvider>
                <SideBar heading="Script Tool Options">
                    <JSONUploadControls />
                </SideBar>
                <Viewer />
            </ScriptContextProvider>
        </div>
    );
};

export default Page;
