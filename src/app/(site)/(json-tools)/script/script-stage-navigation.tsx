import { Button } from "@/components/button";
import { reset } from "@/components/json-upload/json-upload-actions";
import { useJSONDispatchContext } from "@/components/json-upload/use-json-context";
import ButtonNavigation from "@/components/sidebar/button-navigation";
import { ReactNode, useCallback } from "react";

const ScriptStageNavigation = ({ children }: { children: ReactNode }) => {
    const dispatchJSONAction = useJSONDispatchContext();
    const resetScript = useCallback(
        () => dispatchJSONAction(reset),
        [dispatchJSONAction],
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
