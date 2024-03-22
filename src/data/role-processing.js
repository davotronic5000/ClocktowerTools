var roleData = require("./roles.ts");
var fs = require("fs");

const processor = (roles) => {
    return roles.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.id]: curr,
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
