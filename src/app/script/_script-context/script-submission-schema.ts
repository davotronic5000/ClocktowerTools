import { z } from "zod";

export const ScriptToolSchema = z.object({
    name: z.string(),
    author: z.string().optional(),
    colour: z.string(),
    secondaryColour: z.string().optional(),
    colourBlendType: z
        .enum([
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
        ])
        .optional(),
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
});

export type ScriptToolSchemaType = z.infer<typeof ScriptToolSchema>;
