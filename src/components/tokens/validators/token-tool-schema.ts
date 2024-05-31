import { z } from "zod";

const TokenSizeSchema = z.object({
    tokenSize: z.number().min(1),
    tokenMargin: z.number().min(0),
    tokenImageBMargin: z.number().min(0),
});

const PageSchema = z.object({
    height: z.number().min(1),
    width: z.number().min(1),
    margin: z.number().min(0),
});

export type TokenToolPageSchemaType = z.infer<typeof PageSchema>;

export const symbolStringValidator = z.string().regex(/^&#\d+;$/);

export const FontSize = z.enum([
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
]);

export const PipsConfig = z.object({
    icon: symbolStringValidator,
    colour: z.string(),
});

export const TokenToolSchema = z.object({
    page: PageSchema,
    tokenSizes: z.object({
        role: TokenSizeSchema,
        reminder: TokenSizeSchema,
        tokenSpacerMargin: z.number(),
    }),
    tokenStyles: z.object({
        fontSize: z.object({
            role: FontSize,
            reminder: FontSize,
        }),
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
        tokenBackground: z.boolean(),
    }),
});

export type TokenToolSchemaType = z.infer<typeof TokenToolSchema>;
