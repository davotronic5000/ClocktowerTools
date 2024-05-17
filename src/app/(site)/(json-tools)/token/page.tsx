import JSONUploadControls from "@/components/json-upload/json-upload-controls";
import StageNavigation from "@/components/json-upload/stage-navigation";
import SideBar from "@/components/sidebar/sidebar";
import { Metadata } from "next/types";
import { Fragment } from "react";
import TokenViewer from "./token-viewer";

export const metadata: Metadata = {
    title: "Tokens",
};

const Page = () => {
    return (
        <Fragment>
            <SideBar heading="Token Tool Options">
                <JSONUploadControls>
                    Customisation Options Coming Soon!
                    <StageNavigation />
                </JSONUploadControls>
            </SideBar>
            <TokenViewer />
        </Fragment>
    );
};

export default Page;
