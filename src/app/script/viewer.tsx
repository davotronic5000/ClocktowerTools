import ScriptLayout from "@/components/script/layout/script-layout";
import { useScriptContext } from "./_script-context/use-script-context";

const Viewer = () => {
    const { scriptPDF } = useScriptContext();
    return <ScriptLayout />;
};

export default Viewer;
