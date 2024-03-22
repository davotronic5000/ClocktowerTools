import ScriptDownloadButton from "@/components/generate-pdf/script-download-button";
import ScriptLayout from "@/components/script/layout/script-layout";
import { useScriptContext } from "./_script-context/use-script-context";

const Viewer = () => {
    const { scriptJSON } = useScriptContext();
    if (scriptJSON) {
        return (
            <div className="flex flex-col items-center">
                <div className="m-2 flex w-full justify-center">
                    <ScriptDownloadButton script={scriptJSON} />
                </div>
                <ScriptLayout script={scriptJSON} />
            </div>
        );
    }
    return <div>Please upload a script</div>;
};

export default Viewer;
