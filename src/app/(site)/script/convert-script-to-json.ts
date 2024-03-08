import scriptJSONValidator, {
    ScriptJSONFileType,
    metaType,
} from "@/utilities/script-json-validator";
import { toast } from "react-toastify";
import { ScriptToolSchemaType } from "./_script-context/script-submission-schema";

const convertScriptToJSON = async (scriptFile: File) => {
    const scriptFileJSON = JSON.parse(await scriptFile.text());
    const validator = scriptJSONValidator.safeParse(scriptFileJSON);
    if (validator.success) {
        const json = scriptFileJSON as ScriptJSONFileType;
        const metaIndex = json.findIndex((item) => {
            if (typeof item !== "string") {
                if (item.id === "_meta") {
                    return true;
                }
            }
            return false;
        });
        const meta = !!~metaIndex
            ? (json.splice(metaIndex, 1)[0] as metaType)
            : undefined;

        const scriptJSON: ScriptToolSchemaType = {
            name: meta?.name || "Custom Script",
            colour: meta?.colour || meta?.color || "blue",
            roles: json.map((role) => {
                if (typeof role === "string") {
                    return {
                        id: role,
                    };
                }
                if (role.id !== "_meta") {
                    if ("image" in role && Array.isArray(role.image)) {
                        return {
                            ...role,
                            image: role.image[0],
                        };
                    }
                }
                return role;
            }),
        };
        return scriptJSON;
    } else {
        console.log(validator.error.issues);
        toast.error(`Script JSON is invalid.`);
        return null;
    }
};

export default convertScriptToJSON;
