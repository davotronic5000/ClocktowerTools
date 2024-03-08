"use client";
import { useContext } from "react";
import { ScriptContext, ScriptDispatchContext } from "./script-context";

export const useScriptContext = () => {
    return useContext(ScriptContext);
};

export const useScriptDispatchContext = () => {
    return useContext(ScriptDispatchContext);
};
