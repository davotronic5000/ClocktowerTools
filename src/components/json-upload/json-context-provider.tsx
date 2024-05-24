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
                case "UPDATE-SCRIPT-CONFIG":
                    if (draft["json"]) {
                        if (action.payload.name)
                            draft["json"].name = action.payload.name;
                        if (action.payload.colour)
                            draft["json"].scriptColourOptions.colour =
                                action.payload.colour;
                        if (action.payload.blendMode)
                            draft["json"].scriptColourOptions.colourBlendType =
                                action.payload.blendMode;
                        if (action.payload.author)
                            draft["json"].author = action.payload.author;
                        draft["json"].scriptColourOptions.secondaryColour =
                            action.payload.secondaryColour;
                        draft["json"].scriptColourOptions.useGradient =
                            action.payload.useGradient;
                        break;
                    }
            }
        },
        { ...defaultContext, json: null },
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
