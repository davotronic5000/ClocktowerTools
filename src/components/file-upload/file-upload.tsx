"use client";

import { Fragment, useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../button";
import { Icon } from "../icon";

const FileUpload = () => {
    const [dragActive, updateDragActive] = useState<boolean>(false);
    const [file, updateFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
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
            <div
                className={`${
                    dragActive ? "bg-gray-200" : "bg-indigo-200"
                } p-4 min-h-[2rem] flex flex-col items-center justify-center font-bold uppercase text-sm border-double border-indigo-800 border-8 text-indigo-800 transition-colors duration-700`}
                onDragEnter={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    updateDragActive(true);
                }}
                onDragOver={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    updateDragActive(true);
                }}
                onDragLeave={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    updateDragActive(false);
                }}
                onDrop={(event) => {
                    event.preventDefault();
                    updateDragActive(false);
                    if (
                        event.dataTransfer.files &&
                        event.dataTransfer.files[0]
                    ) {
                        const file = event.dataTransfer.files[0];
                        checkAndSaveFile(file);
                    }
                }}
            >
                <input
                    className="hidden"
                    type="file"
                    ref={inputRef}
                    accept=".json"
                    onChange={(event) => {
                        event.stopPropagation();
                        if (event.target.files && event.target.files[0]) {
                            const file = event.target.files[0];
                            checkAndSaveFile(file);
                        }
                    }}
                />
                <Icon type="arrow-down-tray" size="xs" />
                <span className="p-1">Drag & Drop File to Upload</span>
                <span className="pb-1">Or</span>
                <Button
                    size="sm"
                    onClick={() => {
                        if (inputRef.current) {
                            inputRef.current.value = "";
                            inputRef.current.click();
                        }
                    }}
                >
                    Click To Browse
                </Button>
            </div>
            {file && (
                <div className="flex items-center text-sm mt-1">
                    <span className="font-bold mr-1">Selected File:</span>{" "}
                    <span>{file.name}</span>
                    <Icon
                        type="trash"
                        size="xxs"
                        className="cursor-pointer mx-1 text-red-700 hover:text-red-900 transition-color duration-700"
                        title="Remove file"
                        onClick={() => updateFile(null)}
                    />
                </div>
            )}
        </Fragment>
    );
};

export default FileUpload;
