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

interface ScriptContextProviderProps {
    children: ReactNode;
}

const defaultState = {
    scriptJSON: null,
    stage: "upload" as stage,
};

const ScriptContextProvider = ({ children }: ScriptContextProviderProps) => {
    const [state, dispatch] = useImmerReducer<
        ScriptContextState,
        ScriptActionTypes
    >((draft, action) => {
        switch (action.type) {
            case "RESET":
                draft = defaultState;
                break;
            case "SCRIPT-UPDATE":
                draft["scriptJSON"] = action.payload;
                break;
        }
    }, defaultState);
    return (
        <ScriptContext.Provider value={state}>
            <ScriptDispatchContext.Provider value={dispatch}>
                {children}
            </ScriptDispatchContext.Provider>
        </ScriptContext.Provider>
    );
};

export default ScriptContextProvider;
