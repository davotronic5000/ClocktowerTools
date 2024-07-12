import { z } from "zod";
import { TokenToolSchema } from "../tokens/validators/token-tool-schema";

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

export const TeamType = z.enum([
    "townsfolk",
    "outsider",
    "minion",
    "demon",
    "fabled",
    "traveler",
]);

export const categories = [
    "first-night",
    "every-night",
    "every-night-star",
    "during-day",
    "once-per-game",
    "other",
] as const;

export const CategoryType = z.enum(categories);

export const RoleType = z.object({
    id: z.string(),
    name: z.string().optional(),
    team: TeamType.optional(),
    firstNight: z.number().optional(),
    otherNight: z.number().optional(),
    image: z.string().url().optional(),
    firstNightReminder: z.string().optional(),
    otherNightReminder: z.string().optional(),
    reminders: z.array(
        z.object({
            text: z.string(),
            count: z.number(),
        }),
    ),
    setup: z.boolean(),
    count: z.number(),
    ability: z.string().optional(),
    hatred: z
        .array(
            z.object({
                id: z.string(),
                reason: z.string(),
            }),
        )
        .optional(),
    category: CategoryType.optional(),
});

export const hexCode = z.string().regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/);

export const ScriptColourOptions = z.object({
    colour: hexCode,
    useGradient: z.boolean().optional(),
    secondaryColour: hexCode.optional(),
    colourBlendType: ColourBlendType.optional(),
});

export const ScriptLayoutOptions = z.object({
    spaceEfficientSorting: z.boolean().default(false),
});

export const ScriptJSONSchema = z.object({
    name: z.string(),
    author: z.string().optional(),
    roles: z.array(RoleType),
    scriptColourOptions: ScriptColourOptions,
    scriptLayoutOptions: ScriptLayoutOptions,
    tokenConfig: TokenToolSchema,
});

export type ScriptJSONSchemaType = z.infer<typeof ScriptJSONSchema>;
export type ColourBlendTypeType = z.infer<typeof ColourBlendType>;
export type CategoryTypeType = z.infer<typeof CategoryType>;
export type RoleType = z.infer<typeof RoleType>;
export type TeamType = z.infer<typeof TeamType>;
export type ScriptColourOptions = z.infer<typeof ScriptColourOptions>;
