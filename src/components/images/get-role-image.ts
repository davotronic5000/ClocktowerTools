import { TeamType } from "../json-upload/universal-json-validator";

const isEvil = (roleType: TeamType) =>
    roleType === "minion" || roleType === "demon";

const getBackupRoleImage = (team: TeamType | undefined = "townsfolk") => {
    return `/roles/cropped/${
        isEvil(team) ? "Generic_evil" : "Generic_good"
    }.png`;
};

export default getBackupRoleImage;
