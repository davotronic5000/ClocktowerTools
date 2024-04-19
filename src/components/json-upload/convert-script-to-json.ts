import scriptJSONValidator, {
    ScriptJSONFileType,
    metaType,
} from "@/components/json-upload/script-json-validator";
import { toast } from "react-toastify";
import convertCustomRole from "./convert-custom-role";
import getRole from "./get-role";
import { ScriptJSONSchemaType } from "./universal-json-validator";

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

        const scriptJSON: ScriptJSONSchemaType = {
            name: meta?.name || "Custom Script",
            scriptColourOptions: {
                colour: meta?.colour || meta?.color || "blue",
            },
            tokenConfig: {
                page: {
                    height: 1123,
                    width: 794,
                    margin: 38,
                },
                tokenSizes: {
                    role: {
                        tokenSize: 170,
                        tokenMargin: 4,
                    },
                    reminder: {
                        tokenSize: 94.5,
                        tokenMargin: 4,
                    },
                },
                tokenStyles: {
                    fontColour: "#262626",
                    setup: {
                        icon: "&#10010;",
                        colour: " #d97f3f",
                    },
                    firstNight: {
                        icon: "&#10038;",
                        colour: "#262626",
                    },
                    otherNight: {
                        icon: "&#10038;",
                        colour: "#262626",
                    },
                    reminder: {
                        icon: "&#10038;",
                        colour: "#262626",
                    },
                    border: {
                        colour: "#402f03",
                        alpha: 0.4,
                        circleBorder: true,
                        squareBorder: false,
                        thickness: 5,
                    },
                },
            },
            roles: json.map((role) => {
                if (typeof role === "string") {
                    return getRole(role);
                }
                if (role.id !== "_meta") {
                    if ("team" in role) {
                        return convertCustomRole(role);
                    }
                }
                return getRole(role.id);
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
