"use client";
import { Dispatch, createContext } from "react";
import { ScriptActionTypes } from "./script-context-actions";

export type stage = "upload" | "config";

export interface ScriptContextState {
    scriptJSON: null | File;
    stage: stage;
}

export type ScriptDispatchContextState = Dispatch<ScriptActionTypes>;

const defaultContext = {
    scriptJSON: null,
    stage: "upload" as stage,
};

export const ScriptContext = createContext<ScriptContextState>(defaultContext);
export const ScriptDispatchContext = createContext<ScriptDispatchContextState>(
    () => console.warn("No dispatch function provided."),
);
