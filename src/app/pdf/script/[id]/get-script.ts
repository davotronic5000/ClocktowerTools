"use server";

import { ScriptToolSchemaType } from "@/app/(site)/script/_script-context/script-submission-schema";

const getScriptFromDatabase = async (
    id: string,
): Promise<ScriptToolSchemaType | null> => {
    // Get script via id from database;
    return {
        name: "Indigestion Brewing",
        colour: "orange",
        author: "Mozart Is Lift Music",
        secondaryColour: "purple",
        colourBlendType: "difference",
        type: "ravenswood-bluff",
        roles: [
            { id: "noble" },
            { id: "clockmaker" },
            { id: "grandmother" },
            { id: "pixie" },
            { id: "sailor" },
            { id: "cult_leader" },
            { id: "snake_charmer" },
            { id: "innkeeper" },
            { id: "professor" },
            { id: "amnesiac" },
            { id: "tea_lady" },
            { id: "farmer" },
            { id: "cannibal" },
            { id: "goon" },
            { id: "snitch" },
            { id: "klutz" },
            { id: "puzzlemaster" },
            { id: "godfather" },
            { id: "cerenovus" },
            { id: "devils_advocate" },
            { id: "widow" },
            { id: "lil_monsta" },
            { id: "fang_gu" },
            { id: "lleech" },
            { id: "legion" },
        ],
    } as ScriptToolSchemaType;
};

export default getScriptFromDatabase;
