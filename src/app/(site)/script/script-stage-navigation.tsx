import { Button } from "@/components/button";
import ButtonNavigation from "@/components/sidebar/button-navigation";
import { ReactNode, useCallback } from "react";
import { scriptReset } from "./_script-context/script-context-actions";
import { useScriptDispatchContext } from "./_script-context/use-script-context";

const ScriptStageNavigation = ({ children }: { children: ReactNode }) => {
    const dispatchScriptAction = useScriptDispatchContext();
    const resetScript = useCallback(
        () => dispatchScriptAction(scriptReset),
        [dispatchScriptAction],
    );
    return (
        <ButtonNavigation>
            <Button variant="secondary" onPress={resetScript}>
                Reset
            </Button>
            {children}
        </ButtonNavigation>
    );
};

export default ScriptStageNavigation;
