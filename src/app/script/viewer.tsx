import PageViewer from "@/components/page-viewer/page-viewer";
import SinglePage from "@/components/page-viewer/single-page";
import { useScriptContext } from "./_script-context/use-script-context";

const Viewer = () => {
    const { scriptPDF } = useScriptContext();
    return (
        <PageViewer>
            <SinglePage />
        </PageViewer>
    );
};

export default Viewer;
