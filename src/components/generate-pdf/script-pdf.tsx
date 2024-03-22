import { ScriptToolSchemaType } from "@/app/(site)/(json-upload)/script/_script-context/script-submission-schema";
import ScriptLayout from "../script/layout/script-layout";

interface ScriptPDFProps {
    scriptJSON: ScriptToolSchemaType;
}

const ScriptPDF = ({ scriptJSON }: ScriptPDFProps) => {
    return <ScriptLayout script={scriptJSON} noPageGap />;
};

export default ScriptPDF;
