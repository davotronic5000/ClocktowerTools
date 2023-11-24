"use client";

import { ReactNode, useReducer } from "react";
import ScriptContext from "./script-context";

interface ScriptContextProviderProps {
    children: ReactNode;
}

const ScriptContextProvider = ({ children }: ScriptContextProviderProps) => {
    const [state, dispatch] = useReducer();
    return <ScriptContext.Provider>{children}</ScriptContext.Provider>;
};

export default ScriptContextProvider;
