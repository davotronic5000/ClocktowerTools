import { z } from "zod";

const scriptJSONValidator = z
    .array(
        z.any().superRefine((x, ctx) => {
            const schemas = [
                z
                    .object({
                        id: z.string(),
                        name: z.string().max(20),
                        image: z
                            .any()
                            .superRefine((x, ctx) => {
                                const schemas = [
                                    z.string().url(),
                                    z
                                        .array(z.string().url())
                                        .min(1)
                                        .max(3)
                                        .describe(
                                            "For non-traveler characters, the icons should be regular alignment and flipped alignment, for travelers they should be unaligned, good alignment and evil alignment",
                                        ),
                                ];
                                const errors = schemas.reduce(
                                    (errors: z.ZodError[], schema) =>
                                        ((result) =>
                                            "error" in result
                                                ? [...errors, result.error]
                                                : errors)(schema.safeParse(x)),
                                    [],
                                );
                                if (schemas.length - errors.length !== 1) {
                                    ctx.addIssue({
                                        path: ctx.path,
                                        code: "invalid_union",
                                        unionErrors: errors,
                                        message:
                                            "Invalid input: Should pass single schema",
                                    });
                                }
                            })
                            .optional(),
                        team: z.enum([
                            "townsfolk",
                            "outsider",
                            "minion",
                            "demon",
                            "traveler",
                            "fabled",
                        ]),
                        edition: z.string().optional(),
                        ability: z.string(),
                        firstNight: z.number().optional(),
                        firstNightReminder: z.string().optional(),
                        otherNight: z.number().optional(),
                        otherNightReminder: z.string().optional(),
                        reminders: z.array(z.string().max(20)).default([]),
                        remindersGlobal: z
                            .array(z.string().max(20))
                            .default([]),
                        setup: z.boolean().default(false),
                        jinxes: z
                            .array(
                                z.object({
                                    id: z.string(),
                                    reason: z.string(),
                                }),
                            )
                            .optional(),
                        special: z
                            .array(
                                z.object({
                                    type: z
                                        .enum([
                                            "selection",
                                            "ability",
                                            "signal",
                                            "vote",
                                            "reveal",
                                        ])
                                        .describe(
                                            "Currently supported values are:\n selection - during character selection,\n signal - during night signaling,\n ability - when clicking on the character token,\n vote - during a vote,\n reveal - at the end of the game, before characters are revealed",
                                        ),
                                    name: z
                                        .enum([
                                            "grimoire",
                                            "pointing",
                                            "ghost-votes",
                                            "distribute-roles",
                                            "bag-disabled",
                                            "bag-duplicate",
                                            "multiplier",
                                            "hidden",
                                            "replace-character",
                                            "player",
                                            "card",
                                        ])
                                        .describe(
                                            "This is a list of the currently implemented special features and will be growing over time.",
                                        ),
                                    value: z
                                        .any()
                                        .superRefine((x, ctx) => {
                                            const schemas = [
                                                z
                                                    .string()
                                                    .describe(
                                                        "The text value that will be used by the special ability.",
                                                    ),
                                                z
                                                    .number()
                                                    .describe(
                                                        "The numeric value that will be used by the special ability.",
                                                    ),
                                            ];
                                            const errors = schemas.reduce(
                                                (
                                                    errors: z.ZodError[],
                                                    schema,
                                                ) =>
                                                    ((result) =>
                                                        "error" in result
                                                            ? [
                                                                  ...errors,
                                                                  result.error,
                                                              ]
                                                            : errors)(
                                                        schema.safeParse(x),
                                                    ),
                                                [],
                                            );
                                            if (
                                                schemas.length -
                                                    errors.length !==
                                                1
                                            ) {
                                                ctx.addIssue({
                                                    path: ctx.path,
                                                    code: "invalid_union",
                                                    unionErrors: errors,
                                                    message:
                                                        "Invalid input: Should pass single schema",
                                                });
                                            }
                                        })
                                        .optional(),
                                    time: z
                                        .enum([
                                            "pregame",
                                            "day",
                                            "night",
                                            "firstNight",
                                            "firstDay",
                                            "otherNight",
                                            "otherDay",
                                        ])
                                        .optional(),
                                    global: z
                                        .enum([
                                            "townsfolk",
                                            "outsider",
                                            "minion",
                                            "demon",
                                            "traveler",
                                        ])
                                        .describe(
                                            "If it's a global ability that can be used without the character being in play, this property defines on which characters it can be used. This does not work on Fabled, because they are not considered to be on the Script.",
                                        )
                                        .optional(),
                                }),
                            )
                            .optional(),
                    })
                    .strict(),
                z
                    .string()
                    .describe(
                        "If you want to include official characters in the script, it is sufficient to provide their ID as a string",
                    ),
                z.object({
                    id: z.literal("_meta"),
                    name: z.string(),
                    author: z.string().optional(),
                    logo: z.string().url().optional(),
                    background: z.string().url().optional(),
                    firstNight: z
                        .array(z.string())
                        .describe(
                            "A custom first night order for this script can be provided in the form of an array here, with optional special entries for 'dusk', 'minioninfo', 'demoninfo' and 'dawn'.",
                        )
                        .optional(),
                    otherNight: z
                        .array(z.string())
                        .describe(
                            "A custom other night order for this script can be provided in the form of an array here, with optional special entries for 'dusk' and 'dawn'.",
                        )
                        .optional(),
                }),
                z.object({ id: z.string() }).strict(),
            ];
            const errors = schemas.reduce(
                (errors: z.ZodError[], schema) =>
                    ((result) =>
                        "error" in result ? [...errors, result.error] : errors)(
                        schema.safeParse(x),
                    ),
                [],
            );
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }),
    )
    .default([]);

export type ScriptJSONFileType = z.infer<typeof scriptJSONValidator>;

export default scriptJSONValidator;
