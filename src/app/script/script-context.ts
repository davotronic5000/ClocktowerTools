import { createContext } from "react";

export interface ScriptContext {
    scriptJSON: null;
}

const defaultContext = {
    scriptJSON: null,
};

export default createContext<ScriptContext>(defaultContext);
