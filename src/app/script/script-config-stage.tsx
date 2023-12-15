"use client";
import { Button } from "@/components/button";
import { Fragment } from "react";
import ScriptStageNavigation from "./script-stage-navigation";

const ScriptConfigStage = () => {
    return (
        <Fragment>
            <ScriptStageNavigation>
                <Button onPress={() => {}}>Submit</Button>
            </ScriptStageNavigation>
        </Fragment>
    );
};

export default ScriptConfigStage;
