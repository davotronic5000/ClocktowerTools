import ScriptLayout from "@/components/script/layout/script-layout";
import { useScriptContext } from "./_script-context/use-script-context";

const Viewer = () => {
    const { scriptJSON } = useScriptContext();
    if (scriptJSON) {
        return <ScriptLayout script={scriptJSON} />;
    }
    return <div>Please upload a script</div>;
};

export default Viewer;
