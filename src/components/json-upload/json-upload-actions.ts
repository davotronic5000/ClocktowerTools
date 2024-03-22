import { ScriptJSONSchemaType } from "./universal-json-validator";

export const reset = {
    type: "RESET",
} as const;

export const updateFile = (file: File) =>
    ({
        type: "UPDATE-FILE",
        payload: file,
    }) as const;

export const updateJSON = (json: ScriptJSONSchemaType) =>
    ({
        type: "UPDATE-JSON",
        payload: json,
    }) as const;

export type JSONUploadActionTypes =
    | typeof reset
    | ReturnType<typeof updateFile>
    | ReturnType<typeof updateJSON>;
