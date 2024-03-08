import { ScriptToolSchemaType } from "@/app/(site)/script/_script-context/script-submission-schema";
import { Button } from "../button";
import getPDF from "./get-pdf";

interface ScriptDownloadButtonProps {
    script: ScriptToolSchemaType;
}

const ScriptDownloadButton = ({ script }: ScriptDownloadButtonProps) => {
    // const html = useRenderToString(<ScriptPDF scriptJSON={script} />);
    return (
        <Button
            onPress={async () => {
                await getPDF(script);
            }}
        >
            Generate PDF
        </Button>
    );
};

export default ScriptDownloadButton;
