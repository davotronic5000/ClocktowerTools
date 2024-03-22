import SideBar from "@/components/sidebar/sidebar";
import { Metadata } from "next/types";
import ScriptContextProvider from "../script/_script-context/script-context-provider";
import TokenViewer from "./token-viewer";

export const metadata: Metadata = {
    title: "Tokens",
};

const Page = () => {
    return (
        <div className="flex grow overflow-auto">
            <ScriptContextProvider>
                <SideBar heading="Token Tool Options">Token Stuff</SideBar>
                <TokenViewer />
            </ScriptContextProvider>
        </div>
    );
};

export default Page;
