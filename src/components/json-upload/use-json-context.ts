"use client";
import { useContext } from "react";
import { JSONContext, JSONDispatchContext } from "./json-context";

export const useJSONContext = () => {
    return useContext(JSONContext);
};

export const useJSONDispatchContext = () => {
    return useContext(JSONDispatchContext);
};
