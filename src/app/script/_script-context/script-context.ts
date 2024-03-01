"use client";
import { Dispatch, createContext } from "react";
import { ScriptActionTypes } from "./script-context-actions";
import { ScriptToolSchemaType } from "./script-submission-schema";

export type stage = "upload" | "config";

export interface ScriptContextState {
    scriptFile: null | File;
    scriptJSON: null | ScriptToolSchemaType;
    scriptPDF: null | Uint8Array;
    stage: stage;
}

export type ScriptDispatchContextState = Dispatch<ScriptActionTypes>;

const defaultContext = {
    scriptFile: null,
    scriptJSON: null,
    scriptPDF: null,
    stage: "upload" as stage,
};

export const ScriptContext = createContext<ScriptContextState>(defaultContext);
export const ScriptDispatchContext = createContext<ScriptDispatchContextState>(
    () => console.warn("No dispatch function provided."),
);
