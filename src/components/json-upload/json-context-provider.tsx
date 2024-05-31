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
                        draft["json"].author = action.payload.author;
                        draft["json"].scriptColourOptions.secondaryColour =
                            action.payload.secondaryColour;
                        draft["json"].scriptColourOptions.useGradient =
                            action.payload.useGradient;
                    }
                    break;
                case "UPDATE-TOKEN-CONFIG":
                    if (draft["json"]) {
                        if (action.payload.name)
                            draft["json"].name = action.payload.name;

                        draft["json"].tokenConfig.page.height =
                            action.payload.pageHeight;
                        draft["json"].tokenConfig.page.width =
                            action.payload.pageWidth;
                        draft["json"].tokenConfig.page.margin =
                            action.payload.pageMargin;

                        draft["json"].tokenConfig.tokenSizes.role.tokenSize =
                            action.payload.tokenRoleSize;
                        draft["json"].tokenConfig.tokenSizes.role.tokenMargin =
                            action.payload.tokenRoleMargin;
                        draft[
                            "json"
                        ].tokenConfig.tokenSizes.role.tokenImageBMargin =
                            action.payload.tokenRoleImageBMargin;

                        draft[
                            "json"
                        ].tokenConfig.tokenSizes.reminder.tokenSize =
                            action.payload.tokenReminderSize;
                        draft[
                            "json"
                        ].tokenConfig.tokenSizes.reminder.tokenMargin =
                            action.payload.tokenReminderMargin;
                        draft[
                            "json"
                        ].tokenConfig.tokenSizes.reminder.tokenImageBMargin =
                            action.payload.tokenReminderImageBMargin;

                        draft["json"].tokenConfig.tokenStyles.tokenBackground =
                            action.payload.tokenBackground;
                        draft["json"].tokenConfig.tokenSizes.tokenSpacerMargin =
                            action.payload.tokenSpacerMargin;
                    }
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
