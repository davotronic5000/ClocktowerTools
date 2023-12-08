import SideBar from "@/components/sidebar/sidebar";
import ScriptContextProvider from "./_script-context/script-context-provider";
import JSONUploadControls from "./json-upload-controls";

const Page = () => {
    return (
        <div className="flex grow overflow-auto">
            <SideBar heading="Script Tool Options">
                <ScriptContextProvider>
                    <JSONUploadControls />
                </ScriptContextProvider>
            </SideBar>
            <article className="h-full grow overflow-auto">
                PDF
                <div className="h-[2000px]">Stuff</div>
            </article>
        </div>
    );
};

export default Page;
