import SideBar from "@/components/sidebar/sidebar";
import { Metadata } from "next/types";
import { Fragment } from "react";
import JSONUploadControls from "../../../../components/json-upload/json-upload-controls";
import ScriptConfigStage from "./script-config-stage";
import Viewer from "./viewer";

export const metadata: Metadata = {
    title: "Script",
};

const Page = () => {
    return (
        <Fragment>
            <SideBar heading="Script Tool Options">
                <JSONUploadControls>
                    <ScriptConfigStage />
                </JSONUploadControls>
            </SideBar>
            <Viewer />
        </Fragment>
    );
};

export default Page;
