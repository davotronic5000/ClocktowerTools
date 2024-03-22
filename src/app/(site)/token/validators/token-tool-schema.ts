import { z } from "zod";

const TokenRoleSchema = z.object({
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
});

export const TokenToolSchema = z.object({
    name: z.string(),
    roles: z.array(TokenRoleSchema),
});

export type TokenToolSchemaType = z.infer<typeof TokenToolSchema>;
