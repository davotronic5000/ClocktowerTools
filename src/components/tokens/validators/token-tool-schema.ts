import { z } from "zod";

const TokenRoleSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    firstNight: z.number().optional(),
    otherNight: z.number().optional(),
    image: z.string().url().optional(),
    reminders: z.array(
        z.object({
            text: z.string(),
            count: z.number(),
        }),
    ),
    setup: z.boolean(),
    count: z.number(),
});

const TokenSizeSchema = z.object({
    tokenSize: z.number(),
    tokenMargin: z.number(),
});

const PageSchema = z.object({
    height: z.number(),
    width: z.number(),
    margin: z.number(),
    tokenSizes: z.object({
        role: TokenSizeSchema,
        reminder: TokenSizeSchema,
    }),
});

export type TokenToolPageSchemaType = z.infer<typeof PageSchema>;

export const TokenToolSchema = z.object({
    name: z.string(),
    page: PageSchema,
    roles: z.array(TokenRoleSchema),
});

export type TokenToolSchemaType = z.infer<typeof TokenToolSchema>;
