var roleData = require("./roles.ts");
var fs = require("fs");

const getCategoryFromAbilityText = (ability) => {
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
    if (abilityLower.includes("once per game")) {
        return "once-per-game";
    }
    return "other";
};

const getCategory = (role) => {
    if (role.category) {
        return role.category;
    }
    if (role.ability) {
        return getCategoryFromAbilityText(role.ability);
    }
    return "other";
};

const processor = (roles) => {
    return Object.keys(roles).reduce((acc, curr) => {
        return {
            ...acc,
            [curr]: {
                ...roles[curr],
                category: getCategory(roles[curr]),
            },
        };
    }, {});
};

fs.writeFile(
    "src/data/roles-new.json",
    JSON.stringify(processor(roleData)),
    (err) => {
        console.log(err);
    },
);
