import { z } from "zod";
import { ScriptColourOptions } from "./universal-json-validator";

const meta = z.object({
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
    scriptColourOptions: ScriptColourOptions.optional(),
});

export type metaType = z.infer<typeof meta>;

const customCharacter = z.object({
    id: z.string(),
    name: z.string().max(20),
    image: z
        .union([
            z.string().url(),
            z
                .array(z.string().url())
                .min(1)
                .max(3)
                .describe(
                    "For non-traveler characters, the icons should be regular alignment and flipped alignment, for travelers they should be unaligned, good alignment and evil alignment",
                ),
        ])
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
    remindersGlobal: z.array(z.string().max(20)).default([]),
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
                    .enum(["selection", "ability", "signal", "vote", "reveal"])
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
                    .union([
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
                    ])
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
});

export type customCharacterType = z.infer<typeof customCharacter>;

export const scriptJSONValidator = z.array(
    z.union([
        z
            .string()
            .describe(
                "If you want to include official characters in the script, it is sufficient to provide their ID as a string",
            ),
        meta,
        customCharacter,
        z.object({ id: z.string() }).strict(),
    ]),
);

export type ScriptJSONFileType = z.infer<typeof scriptJSONValidator>;

export default scriptJSONValidator;
