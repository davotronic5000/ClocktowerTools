import { Dispatch, createContext } from "react";
import { JSONUploadActionTypes } from "./json-upload-actions";
import { ScriptJSONSchemaType } from "./universal-json-validator";

export interface JSONContextState {
    file: null | File;
    json: null | ScriptJSONSchemaType;
}

export const defaultContext = {
    file: null,
    json: null,
};

export type JSONDispatchContextState = Dispatch<JSONUploadActionTypes>;

export const JSONContext = createContext<JSONContextState>(defaultContext);
export const JSONDispatchContext = createContext<JSONDispatchContextState>(() =>
    console.warn("No dispatch function provided"),
);
