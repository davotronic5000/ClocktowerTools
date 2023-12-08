"use client";

import { Fragment, useCallback, useState } from "react";
import {
    DropZone,
    FileDropItem,
    FileTrigger,
    Text,
} from "react-aria-components";
import { toast } from "react-toastify";
import { Button } from "../button";
import { Icon } from "../icon";

const FileUpload = () => {
    const [file, updateFile] = useState<File | null>(null);
    const checkAndSaveFile = useCallback(
        (file: File) => {
            if (file.type === "application/json") {
                updateFile(file);
            } else {
                toast.error("Please select a valid JSON file");
            }
        },
        [updateFile],
    );
    return (
        <Fragment>
            <DropZone
                className={({ isDropTarget, isFocused }) =>
                    `${
                        isDropTarget || isFocused
                            ? "bg-gray-200"
                            : "bg-indigo-200"
                    } flex min-h-[2rem] flex-col items-center justify-center border-8 border-double border-indigo-800 p-4 text-sm font-bold uppercase text-indigo-800 transition-colors duration-700`
                }
                onDrop={async (e) => {
                    if (e.items) {
                        const files = e.items.filter(
                            (item) => item.kind === "file",
                        ) as FileDropItem[];
                        if (files[0]) {
                            const file = await files[0].getFile();
                            checkAndSaveFile(file);
                        }
                    }
                }}
            >
                <Text slot="label" className="flex flex-col items-center">
                    <Icon type="arrow-down-tray" size="xs" />
                    <span className="p-1">Drag & Drop File to Upload</span>
                </Text>
                <span className="pb-1">Or</span>
                <FileTrigger
                    onSelect={(e) => {
                        if (e?.length) {
                            const files = Array.from(e);
                            checkAndSaveFile(files[0]);
                        }
                    }}
                    acceptedFileTypes={["application/json"]}
                >
                    <Button size="sm">Click To Browse</Button>
                </FileTrigger>
            </DropZone>
            {file && (
                <div className="mt-1 flex items-center text-sm">
                    <span className="mr-1 font-bold">Selected File:</span>{" "}
                    <span>{file.name}</span>
                    <Icon
                        type="trash"
                        size="xxs"
                        className="transition-color mx-1 cursor-pointer text-red-700 duration-700 hover:text-red-900"
                        title="Remove file"
                        onClick={() => updateFile(null)}
                    />
                </div>
            )}
        </Fragment>
    );
};

export default FileUpload;
