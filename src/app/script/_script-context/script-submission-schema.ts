import { z } from "zod";

export const ScriptSubmissionSchema = z.object({
    name: z.string(),
    colour: z.string(),
    type: z.enum(["teensyville", "ravenswood-bluff", "phobos"]),
    roles: z.array(
        z.object({
            id: z.string(),
            name: z.string().optional(),
            team: z
                .enum([
                    "townsfolk",
                    "outsider",
                    "minion",
                    "demon",
                    "fabled",
                    "traveler",
                ])
                .optional(),
            firstNight: z.number().optional(),
            otherNight: z.number().optional(),
            image: z.string().url().optional(),
            colour: z.string().optional(),
            firstNightReminder: z.string().optional(),
            otherNightReminder: z.string().optional(),
            ability: z.string().optional(),
            hatred: z
                .array(
                    z.object({
                        id: z.string(),
                        reason: z.string(),
                    }),
                )
                .optional(),
        }),
    ),
    modern: z.boolean().optional(),
    colourise: z.boolean().optional(),
});

export type ScriptSubmissionType = z.infer<typeof ScriptSubmissionSchema>;
