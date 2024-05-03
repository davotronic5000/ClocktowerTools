import { TeamType } from "../json-upload/universal-json-validator";

const isEvil = (roleType: TeamType) =>
    roleType === "minion" || roleType === "demon";

const getBackupRoleImage = (team: TeamType | undefined = "townsfolk") => {
    return `/roles/modern/${isEvil(team) ? "evil" : "good"}.webp`;
};

export default getBackupRoleImage;
