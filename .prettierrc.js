/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    plugins: [
        "prettier-plugin-tailwindcss",
        "prettier-plugin-organize-imports",
    ],
    tailwindFunctions: ["tw"],
};

module.exports = config;
