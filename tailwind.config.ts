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
    daisyui: {
        themes: [
            {
                clocktower: {
                    primary: "#b8a8f4",

                    secondary: "#1049ba",

                    accent: "#b38900",

                    neutral: "#1b1424",

                    "base-100": "#4b4153",

                    info: "#8ea7ec",

                    success: "#219754",

                    warning: "#f5c95c",

                    error: "#e67c70",
                },
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("tailwindcss-opentype"),
    ],
};
export default config;
