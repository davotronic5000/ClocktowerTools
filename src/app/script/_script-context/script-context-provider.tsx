"use client";
import { ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import IB from "../../..//Indigestion_Brewing.json";
import {
    ScriptContext,
    ScriptContextState,
    ScriptDispatchContext,
    stage,
} from "./script-context";
import { ScriptActionTypes } from "./script-context-actions";

interface ScriptContextProviderProps {
    children: ReactNode;
}

const defaultState = {
    scriptFile: null,
    scriptJSON: null,
    stage: "upload" as stage,
};

const initialState = {
    scriptFile: null,
    scriptJSON: IB,
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
