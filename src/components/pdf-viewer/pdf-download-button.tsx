import { saveAs } from "file-saver";
import { Route } from "next";
import { useState } from "react";
import { Button } from "../button";

export interface PDFDownloadButtonProps {
    apiRoute: Route;
    fileName: string;
    data: unknown;
}

const PDFDownloadButton = ({
    apiRoute,
    data,
    fileName,
}: PDFDownloadButtonProps) => {
    const [fetching, updateFetching] = useState(false);
    return (
        <div className="m-2 flex w-full justify-center">
            <Button
                size="sm"
                loading={fetching}
                onPress={async () => {
                    updateFetching(true);
                    const response = await fetch(apiRoute, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });
                    if (response.body) {
                        saveAs(
                            new Blob([await response.arrayBuffer()], {
                                type: "application/pdf",
                            }),
                            `${fileName}.pdf`,
                        );
                    }
                    updateFetching(false);
                }}
            >
                Download PDF
            </Button>
        </div>
    );
};

export default PDFDownloadButton;
