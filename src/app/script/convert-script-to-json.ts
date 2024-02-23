import scriptJSONValidator, { ScriptJSONFileType } from "@/utilities/script-json-validator";
import { toast } from "react-toastify";
import { ScriptSubmissionType } from "./_script-context/script-submission-schema";

const convertScriptToJSON = async (scriptFile: File) => {
    const scriptFileJSON = JSON.parse(await scriptFile.text());
    const validator = scriptJSONValidator.safeParse(scriptFileJSON);
    if (validator.success) {
        const json = scriptFileJSON as ScriptJSONFileType;
        const meta = json.find(item => )
        const scriptJSON: ScriptSubmissionType = 
    } else {
        toast.error(`Script JSON is invalid: ${validator.error.toString()}`);
    }
};

export default convertScriptToJSON;
