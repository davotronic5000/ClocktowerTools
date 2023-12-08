import { Button } from "@/components/button";
import FileUpload from "@/components/file-upload/file-upload";
import { Fragment } from "react";

const JSONUploadControls = () => {
    return (
        <Fragment>
            <FileUpload />
            <div className="mt-4 flex justify-between border-t border-solid border-gray-200 pt-4">
                <Button type="secondary">Reset</Button>
                <Button isDisabled>Select Script</Button>
            </div>
        </Fragment>
    );
};

export default JSONUploadControls;
