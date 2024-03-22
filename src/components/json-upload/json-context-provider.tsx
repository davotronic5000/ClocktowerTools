"use client";
import { ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import {
    JSONContext,
    JSONContextState,
    JSONDispatchContext,
    defaultContext,
} from "./json-context";
import { JSONUploadActionTypes } from "./json-upload-actions";
import testJSON from "./test-json";

interface JSONContextProviderProps {
    children: ReactNode;
}

const JSONContextProvider = ({ children }: JSONContextProviderProps) => {
    const [state, dispatch] = useImmerReducer<
        JSONContextState,
        JSONUploadActionTypes
    >(
        (draft, action) => {
            switch (action.type) {
                case "RESET":
                    return defaultContext;
                case "UPDATE-FILE":
                    draft["file"] = action.payload;
                    break;
                case "UPDATE-JSON":
                    draft["json"] = action.payload;
                    break;
            }
        },
        { ...defaultContext, json: testJSON },
    );
    return (
        <JSONContext.Provider value={state}>
            <JSONDispatchContext.Provider value={dispatch}>
                {children}
            </JSONDispatchContext.Provider>
        </JSONContext.Provider>
    );
};

export default JSONContextProvider;
