"use server";

import {
    ScriptToolSchema,
    ScriptToolSchemaType,
} from "./_script-context/script-submission-schema";
import { ScriptFormType } from "./script-config-stage";

const concatUintArrayArrays = (a: Uint8Array, b: Uint8Array) => {
    const c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
};

export const submitScript = async (
    scriptJSON: ScriptToolSchemaType,
    formValues: ScriptFormType,
) => {
    const combinedScript = {
        ...scriptJSON,
        formValues,
    };
    const validatedFields = ScriptToolSchema.safeParse(combinedScript);
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
    } else {
        const pdfResponse = await fetch(
            "https://api.clocktower.guru:8082/script",
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(combinedScript),
            },
        );
        if (pdfResponse.ok && pdfResponse.body) {
            const reader = await pdfResponse.body.getReader();
            let pdf = new Uint8Array();
            let processing = true;
            while (processing) {
                const { done, value } = await reader.read();
                if (value) {
                    pdf = concatUintArrayArrays(pdf, value);
                }
                if (done) {
                    processing = false;
                }
            }
            return pdf;
        }
    }
};
