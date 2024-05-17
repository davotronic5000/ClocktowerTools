var roleData = require("./fabled.ts");
var fs = require("fs");

const processor = (roles) => {
    return roles.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.id]: {
                ...curr,
                count: curr.count || 1,
                reminders: curr.reminders.map((rem) => ({
                    text: rem,
                    count: 1,
                })),
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
