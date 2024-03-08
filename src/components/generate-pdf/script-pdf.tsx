import { ScriptToolSchemaType } from "@/app/script/_script-context/script-submission-schema";
import ScriptLayout from "../script/layout/script-layout";

interface ScriptPDFProps {
    scriptJSON: ScriptToolSchemaType;
}

const ScriptPDF = ({ scriptJSON }: ScriptPDFProps) => {
    return (
        <html>
            <body>
                <ScriptLayout script={scriptJSON} />
            </body>
        </html>
    );
};

export default ScriptPDF;
