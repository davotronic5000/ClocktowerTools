import { stage } from "./script-context";

export type ScriptActionTypes =
    | typeof scriptReset
    | ReturnType<typeof scriptUpdateFile>
    | ReturnType<typeof scriptUpdateStage>
    | ReturnType<typeof scriptUpdatePDF>;

export const scriptReset: {
    type: "RESET";
} = {
    type: "RESET",
};

export const scriptUpdateFile = (
    file: File,
): { type: "SCRIPT-UPDATE"; payload: File } => ({
    type: "SCRIPT-UPDATE",
    payload: file,
});

export const scriptUpdateStage = (
    stage: stage,
): {
    type: "STAGE-UPDATE";
    payload: stage;
} => ({
    type: "STAGE-UPDATE",
    payload: stage,
});

export const scriptUpdatePDF = (
    pdf: Uint8Array,
): {
    type: "SCRIPT-PDF-UPDATE";
    payload: Uint8Array;
} => ({
    type: "SCRIPT-PDF-UPDATE",
    payload: pdf,
});
