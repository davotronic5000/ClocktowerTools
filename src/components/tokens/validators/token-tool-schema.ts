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

export const symbolStringValidator = z.string().regex(/^&#\d+;$/);

export const PipsConfig = z.object({
    icon: symbolStringValidator,
    colour: z.string(),
});

export const TokenToolSchema = z.object({
    page: PageSchema,
    tokenSizes: z.object({
        role: TokenSizeSchema,
        reminder: TokenSizeSchema,
    }),
    tokenStyles: z.object({
        fontColour: z.string(),
        setup: PipsConfig,
        firstNight: PipsConfig,
        otherNight: PipsConfig,
        reminder: PipsConfig,
        border: z.object({
            colour: z.string(),
            alpha: z.number(),
            circleBorder: z.boolean(),
            squareBorder: z.boolean(),
            thickness: z.number(),
        }),
    }),
});

export type TokenToolSchemaType = z.infer<typeof TokenToolSchema>;
