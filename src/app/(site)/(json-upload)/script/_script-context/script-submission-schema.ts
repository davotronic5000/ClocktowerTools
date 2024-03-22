import { z } from "zod";

export const ColourBlendType = z.enum([
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
]);

export const TeamType =  z
.enum([
    "townsfolk",
    "outsider",
    "minion",
    "demon",
    "fabled",
    "traveler",
]);

export const RoleType = z.object({
    id: z.string(),
    name: z.string().optional(),
    team: TeamType
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
});

export const ScriptToolSchema = z.object({
    name: z.string(),
    author: z.string().optional(),
    colour: z.string(),
    secondaryColour: z.string().optional(),
    colourBlendType: ColourBlendType
        .optional(),
    roles: z.array(
        RoleType
    ),
});

export type ScriptToolSchemaType = z.infer<typeof ScriptToolSchema>;
export type ColourBlendTypeType = z.infer<typeof ColourBlendType>;
export type RoleType = z.infer<typeof RoleType>;
export type TeamType = z.infer<typeof TeamType>;
