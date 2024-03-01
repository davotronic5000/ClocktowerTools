import scriptJSONValidator, {
    ScriptJSONFileType,
} from "@/utilities/script-json-validator";
import { toast } from "react-toastify";

const convertScriptToJSON = async (scriptFile: File) => {
    const scriptFileJSON = JSON.parse(await scriptFile.text());
    const validator = scriptJSONValidator.safeParse(scriptFileJSON);
    if (validator.success) {
        const json = scriptFileJSON as ScriptJSONFileType;
        // const meta = json.find(item => )
        // const scriptJSON: ScriptSubmissionType =
    } else {
        console.log(validator.error.issues);
        toast.error(`Script JSON is invalid.`);
    }
};

export default convertScriptToJSON;
