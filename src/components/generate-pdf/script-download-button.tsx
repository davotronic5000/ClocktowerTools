import { ScriptToolSchemaType } from "@/app/(site)/script/_script-context/script-submission-schema";
import { saveAs } from "file-saver";
import { useState } from "react";
import { Button } from "../button";

interface ScriptDownloadButtonProps {
    script: ScriptToolSchemaType;
}

const ScriptDownloadButton = ({ script }: ScriptDownloadButtonProps) => {
    // const html = useRenderToString(<ScriptPDF scriptJSON={script} />);
    const [fetching, updateFetching] = useState(false);
    return (
        <Button
            size="sm"
            loading={fetching}
            onPress={async () => {
                updateFetching(true);
                const response = await fetch("/api/script-pdf", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(script),
                });
                if (response.body) {
                    saveAs(
                        new Blob([await response.arrayBuffer()], {
                            type: "application/pdf",
                        }),
                        `${script.name}.pdf`,
                    );
                }
                updateFetching(false);
            }}
        >
            Download PDF
        </Button>
    );
};

export default ScriptDownloadButton;
