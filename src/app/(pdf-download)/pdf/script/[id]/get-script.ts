"use server";

import { ScriptJSONSchemaType } from "@/components/json-upload/universal-json-validator";
import { createClient } from "redis";

const getScriptFromDatabase = async (
    id: string,
): Promise<ScriptJSONSchemaType | null> => {
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
