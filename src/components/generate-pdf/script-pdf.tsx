import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import ScriptLayout from "../script/layout/script-layout";

interface ScriptPDFProps {
    scriptJSON: ScriptJSONSchemaType;
}

const ScriptPDF = ({ scriptJSON }: ScriptPDFProps) => {
    return <ScriptLayout script={scriptJSON} noPageGap />;
};

export default ScriptPDF;
