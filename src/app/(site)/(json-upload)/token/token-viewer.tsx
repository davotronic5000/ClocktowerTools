"use client";
import ScriptDownloadButton from "@/components/generate-pdf/script-download-button";
import TokenLayout from "@/components/tokens/layout/token-layout";
import { useScriptContext } from "../script/_script-context/use-script-context";

const TokenViewer = () => {
    const { scriptJSON } = useScriptContext();
    if (scriptJSON) {
        return (
            <div className="flex grow flex-col items-center">
                <div className="m-2 flex w-full justify-center">
                    <ScriptDownloadButton script={scriptJSON} />
                </div>
                <TokenLayout tokenScript={scriptJSON} />
            </div>
        );
    }
    return <div>Please upload a script</div>;
};

export default TokenViewer;
