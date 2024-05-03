import originalRoles from "@/data/roles";
import { toast } from "react-toastify";
import { RoleType, TeamType } from "./universal-json-validator";

const getRole = (id: string): RoleType => {
    const roleId = id.replaceAll(/[-_]/g, "").toLowerCase();
    if (roleId in originalRoles) {
        return {
            ...originalRoles[roleId as keyof typeof originalRoles],
            image: `/roles/modern/${roleId}.webp`,
        } as RoleType;
    }
    toast.error(`UNKNOWN ROLE: ${roleId} - Not found in roles.json`);
    return {
        id,
        name: "Unknown Role",
        team: "townsfolk" as TeamType,
        firstNight: 0,
        firstNightReminder: "",
        otherNight: 0,
        otherNightReminder: "",
        ability: "This role is missing a definition",
        image: "good.webp",
        setup: false,
        count: 1,
        reminders: [],
    };
};

export default getRole;
