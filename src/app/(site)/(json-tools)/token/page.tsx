import JSONUploadControls from "@/components/json-upload/json-upload-controls";
import StageNavigation from "@/components/json-upload/stage-navigation";
import SideBar from "@/components/sidebar/sidebar";
import { Metadata } from "next/types";
import { Fragment } from "react";
import TokenConfig from "./token-config-stage";
import TokenViewer from "./token-viewer";

export const metadata: Metadata = {
    title: "Tokens",
};

const Page = () => {
    return (
        <Fragment>
            <SideBar heading="Token Tool Options">
                <JSONUploadControls>
                    <TokenConfig />
                    <StageNavigation />
                </JSONUploadControls>
            </SideBar>
            <TokenViewer />
        </Fragment>
    );
};

export default Page;
