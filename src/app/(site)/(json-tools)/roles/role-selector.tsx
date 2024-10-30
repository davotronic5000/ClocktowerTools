"use client";
import ComboBox, { section } from "@/components/form/combo-box";
import originalRoles from "@/data/roles";

interface RoleSelectorProps {}

const roleOptions = Object.keys(originalRoles).reduce((acc, curr) => {
    const role = originalRoles[curr];
    const optionRole = {
        id: role.id,
        name: role.name || "Unknown Role",
        href: `/roles/${role.id}`,
    };
    const roleTeam = role.team || "unknown";
    const typeHolder = acc.find((type) => type.id === roleTeam);
    if (typeHolder) {
        typeHolder.children.push(optionRole);
    } else {
        const teamName = roleTeam.toUpperCase();
        acc.push({
            id: roleTeam,
            name: teamName,
            children: [optionRole],
        });
    }
    return acc;
}, [] as section[]);

const RoleSelector = ({}: RoleSelectorProps) => {
    return (
        <ComboBox
            name="role"
            sections={roleOptions}
            label="Select Role"
        ></ComboBox>
    );
};

export default RoleSelector;
