"use server";

import { ScriptToolSchemaType } from "@/app/(site)/script/_script-context/script-submission-schema";
import { createClient } from "redis";

const getScriptFromDatabase = async (
    id: string,
): Promise<ScriptToolSchemaType | null> => {
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    const script = await client.get(id);
    await client.disconnect();
    if (script) {
        const scriptJSON = JSON.parse(script);
        return scriptJSON;
    }
    return null;
};

export default getScriptFromDatabase;
