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
                    primary: "#3F88C5",
                    secondary: "#E55934",
                    accent: "#F5B841",
                    neutral: "#393E41",
                    "base-100": "#3F3047",
                    info: "#8ea7ec",
                    success: "#219754",
                    warning: "#f5c95c",
                    error: "#e67c70",
                    "--rounded-btn": "0", // border radius rounded-btn utility class, used in buttons and similar element
                    "--border-btn": "4px", // border width of buttons
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
