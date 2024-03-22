import { z } from "zod";

const TokenSizeSchema = z.object({
    tokenSize: z.number(),
    tokenMargin: z.number(),
});

const PageSchema = z.object({
    height: z.number(),
    width: z.number(),
    margin: z.number(),
});

export type TokenToolPageSchemaType = z.infer<typeof PageSchema>;

export const TokenToolSchema = z.object({
    page: PageSchema,
    tokenSizes: z.object({
        role: TokenSizeSchema,
        reminder: TokenSizeSchema,
    }),
});

export type TokenToolSchemaType = z.infer<typeof TokenToolSchema>;
