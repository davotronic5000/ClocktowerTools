import TokenPDF from "@/components/generate-pdf/token-pdf";
import getJSON from "../../get-json";

interface PageProps {
    params: {
        id: string;
    };
}

const Page = async ({ params }: PageProps) => {
    const script = await getJSON(params.id);
    if (script) {
        return <TokenPDF scriptJSON={script} />;
    }
    return <div>No script data available</div>;
};

export default Page;
