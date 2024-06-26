import ScriptPDF from "@/components/generate-pdf/script-pdf";
import getJSON from "../../get-json";

interface PageProps {
    params: {
        id: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const script = await getJSON(params.id);
    if (script) {
        return <ScriptPDF scriptJSON={script} />;
    }
    return <div>No script data available</div>;
};

export default Page;
