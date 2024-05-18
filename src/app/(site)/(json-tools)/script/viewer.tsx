"use client";
import { useJSONContext } from "@/components/json-upload/use-json-context";
import PDFViewer from "@/components/pdf-viewer/pdf-viewer";
import ScriptLayout from "@/components/script/layout/script-layout";

const Viewer = () => {
    const { json } = useJSONContext();
    if (json) {
        return (
            <PDFViewer
                fileName={json.name}
                apiRoute="/api/script-pdf"
                data={json}
            >
                <ScriptLayout script={json} />
            </PDFViewer>
        );
    }
    return <div>Please upload a script</div>;
};

export default Viewer;
