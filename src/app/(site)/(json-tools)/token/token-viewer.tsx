"use client";
import { useJSONContext } from "@/components/json-upload/use-json-context";
import PDFViewer from "@/components/pdf-viewer/pdf-viewer";
import TokenLayout from "@/components/tokens/layout/token-layout";

const TokenViewer = () => {
    const { json } = useJSONContext();
    if (json) {
        return (
            <PDFViewer
                fileName={`${json.name}-tokens`}
                apiRoute="/api/token-pdf"
                data={json}
            >
                <TokenLayout tokenScript={json} />
            </PDFViewer>
        );
    }
    return <div>Please upload a script</div>;
};

export default TokenViewer;
