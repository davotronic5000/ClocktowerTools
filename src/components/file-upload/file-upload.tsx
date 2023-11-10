"use client";

import { Fragment, useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../button";
import { Icon } from "../icon";
import Toast from "../toast";
import { toastStyle } from "../toast/toast";

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
                <div className="flex items-center">
                    Selected File: {file.name}{" "}
                    <Icon
                        type="trash"
                        size="xs"
                        className="cursor-pointer mx-1 text-red-700 hover:text-red-900 transition-color duration-700"
                        title="Remove file"
                        onClick={() => updateFile(null)}
                    />
                </div>
            )}
            <div className="flex flex-col p-2">
                {(
                    ["error", "warning", "success", "info"] as Array<toastStyle>
                ).map((style) => (
                    <Button
                        className="mb-2"
                        key={style}
                        onClick={() =>
                            toast.custom(<Toast style={style}>Toast!</Toast>, {
                                duration: 1000000,
                            })
                        }
                    >
                        {style} me
                    </Button>
                ))}
            </div>
        </Fragment>
    );
};

export default FileUpload;
