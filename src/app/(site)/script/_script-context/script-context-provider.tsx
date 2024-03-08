"use client";
import { ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import {
    ScriptContext,
    ScriptContextState,
    ScriptDispatchContext,
    stage,
} from "./script-context";
import { ScriptActionTypes } from "./script-context-actions";
import { ScriptToolSchemaType } from "./script-submission-schema";

interface ScriptContextProviderProps {
    children: ReactNode;
}

const defaultState = {
    scriptFile: null,
    scriptJSON: null,
    scriptPDF: null,
    stage: "upload" as stage,
};

const initialState = {
    scriptFile: null,
    scriptJSON: {
        name: "Indigestion Brewing",
        colour: "orange",
        author: "Mozart Is Lift Music",
        secondaryColour: "purple",
        colourBlendType: "difference",
        type: "ravenswood-bluff",
        roles: [
            { id: "noble" },
            { id: "clockmaker" },
            { id: "grandmother" },
            { id: "pixie" },
            { id: "sailor" },
            { id: "cult_leader" },
            { id: "snake_charmer" },
            { id: "innkeeper" },
            { id: "professor" },
            { id: "amnesiac" },
            { id: "tea_lady" },
            { id: "farmer" },
            { id: "cannibal" },
            { id: "goon" },
            { id: "snitch" },
            { id: "klutz" },
            { id: "puzzlemaster" },
            { id: "godfather" },
            { id: "cerenovus" },
            { id: "devils_advocate" },
            { id: "widow" },
            { id: "lil_monsta" },
            { id: "fang_gu" },
            { id: "lleech" },
            { id: "legion" },
        ],
    } as ScriptToolSchemaType,
    scriptPDF: null,
    stage: "config" as stage,
};

const ScriptContextProvider = ({ children }: ScriptContextProviderProps) => {
    const [state, dispatch] = useImmerReducer<
        ScriptContextState,
        ScriptActionTypes
    >((draft, action) => {
        switch (action.type) {
            case "RESET":
                return defaultState;
            case "SCRIPT-UPDATE":
                draft["scriptFile"] = action.payload;
                break;
            case "SCRIPT-PDF-UPDATE":
                draft["scriptPDF"] = action.payload;
                break;
            case "SCRIPT-JSON-UPDATE":
                draft["scriptJSON"] = action.payload;
                break;
            case "STAGE-UPDATE":
                draft["stage"] = action.payload;
                break;
        }
    }, initialState);
    return (
        <ScriptContext.Provider value={state}>
            <ScriptDispatchContext.Provider value={dispatch}>
                {children}
            </ScriptDispatchContext.Provider>
        </ScriptContext.Provider>
    );
};

export default ScriptContextProvider;
