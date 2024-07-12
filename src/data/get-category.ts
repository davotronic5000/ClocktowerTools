import {
    CategoryTypeType,
    RoleType,
} from "@/components/json-upload/universal-json-validator";

const getCategoryFromAbilityText = (ability: string): CategoryTypeType => {
    const abilityLower = ability.toLowerCase();
    if (
        abilityLower.includes("start knowing") ||
        abilityLower.includes("first night") ||
        abilityLower.includes("1st night")
    ) {
        return "first-night";
    }
    if (abilityLower.includes("each night*")) {
        return "every-night-star";
    }
    if (abilityLower.includes("each night")) {
        return "every-night";
    }
    if (
        abilityLower.includes("each day") ||
        abilityLower.includes("once per day")
    ) {
        return "during-day";
    }
    if (
        abilityLower.includes("once per game") ||
        abilityLower.includes("1st day")
    ) {
        return "once-per-game";
    }
    return "other";
};

const getCategory = (role: RoleType): CategoryTypeType => {
    if (role.category) {
        return role.category;
    }
    if (role.ability) {
        return getCategoryFromAbilityText(role.ability);
    }
    return "other";
};

export default getCategory;
