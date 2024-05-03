import getBackupRoleImage from "../images/get-role-image";
import { customCharacterType } from "./script-json-validator";
import { RoleType } from "./universal-json-validator";

const convertCustomRole = ({
    image,
    reminders,
    remindersGlobal,
    ...rest
}: customCharacterType): RoleType => {
    const roleImage = Array.isArray(image) ? image[0] : image;
    return {
        ...rest,
        image: roleImage || getBackupRoleImage(rest.team),
        count: 1,
        reminders: reminders
            .map((text) => ({ text, count: 1 }))
            .concat(remindersGlobal.map((text) => ({ text, count: 1 }))),
    };
};

export default convertCustomRole;
