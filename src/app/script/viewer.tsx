import ScriptDownloadButton from "@/components/generate-pdf/script-download-button";
import ScriptLayout from "@/components/script/layout/script-layout";
import { useScriptContext } from "./_script-context/use-script-context";

const Viewer = () => {
    const { scriptJSON } = useScriptContext();
    if (scriptJSON) {
        return (
            <div>
                <ScriptDownloadButton script={scriptJSON} />
                <ScriptLayout script={scriptJSON} />
            </div>
        );
    }
    return <div>Please upload a script</div>;
};

export default Viewer;
