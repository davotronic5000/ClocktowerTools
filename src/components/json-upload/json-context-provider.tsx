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
                        draft["json"].tokenConfig.tokenStyles.fontSize.role =
                            action.payload.fontSizeRole;

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
                        draft[
                            "json"
                        ].tokenConfig.tokenStyles.fontSize.reminder =
                            action.payload.fontSizeReminder;

                        draft["json"].tokenConfig.tokenStyles.setup.colour =
                            action.payload.setupColour;
                        draft["json"].tokenConfig.tokenStyles.setup.icon =
                            action.payload.setupIcon;

                        draft[
                            "json"
                        ].tokenConfig.tokenStyles.firstNight.colour =
                            action.payload.fnColour;
                        draft["json"].tokenConfig.tokenStyles.firstNight.icon =
                            action.payload.fnIcon;

                        draft[
                            "json"
                        ].tokenConfig.tokenStyles.otherNight.colour =
                            action.payload.onColour;
                        draft["json"].tokenConfig.tokenStyles.otherNight.icon =
                            action.payload.onIcon;

                        draft["json"].tokenConfig.tokenStyles.reminder.colour =
                            action.payload.remColour;
                        draft["json"].tokenConfig.tokenStyles.reminder.icon =
                            action.payload.remIcon;

                        draft["json"].tokenConfig.tokenStyles.tokenBackground =
                            action.payload.tokenBackground;
                        draft["json"].tokenConfig.tokenSizes.tokenSpacerMargin =
                            action.payload.tokenSpacerMargin;
                        draft["json"].tokenConfig.tokenStyles.fontColour =
                            action.payload.fontColour;

                        draft[
                            "json"
                        ].tokenConfig.tokenStyles.border.circleBorder =
                            action.payload.circleBorder;
                        draft[
                            "json"
                        ].tokenConfig.tokenStyles.border.squareBorder =
                            action.payload.squareBorder;
                        draft["json"].tokenConfig.tokenStyles.border.thickness =
                            action.payload.borderThickness;
                        draft["json"].tokenConfig.tokenStyles.border.alpha =
                            action.payload.alpha;
                        draft["json"].tokenConfig.tokenStyles.border.colour =
                            action.payload.borderColour;
                    }
                    break;
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
