import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import TokenLayout from "../tokens/layout/token-layout";

interface TokenPDFProps {
    scriptJSON: ScriptJSONSchemaType;
}

const TokenPDF = ({ scriptJSON }: TokenPDFProps) => {
    return <TokenLayout tokenScript={scriptJSON} noPageGap />;
};

export default TokenPDF;
