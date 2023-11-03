import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Raleway", "ui-sans-serif", "system-ui"],
            serif: ["Old Standard TT", "ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-opentype"),
    ],
};
export default config;
