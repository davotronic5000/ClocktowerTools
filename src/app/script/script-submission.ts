"use server";

import { ScriptSubmissionSchema } from "./_script-context/script-submission-schema";

export const submitScript = async (_: unknown, formData: FormData) => {
    const validatedFields = ScriptSubmissionSchema.safeParse(formData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
    const pdf = await fetch("https://api.clocktower.guru:8082/script", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    return validatedFields.data;
};
