import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-raleway)", "ui-sans-serif", "system-ui"],
                serif: ["var(--font-playfair-display)", "ui-serif", "Georgia"],
                mono: ["ui-monospace", "SFMono-Regular"],
                title: ["var(--font-osgard)", "ui-serif", "Georgia"],
                content: [
                    "var(--font-old-standard)",
                    "ui-sans-serif",
                    "system-ui",
                ],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-opentype"),
        require("tailwindcss-react-aria-components"),
        plugin(function ({ addUtilities }) {
            addUtilities({
                // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
                ".horizontal-writing-tb": { "writing-mode": "horizontal-tb" },
                ".vertical-writing-rl": { "writing-mode": "vertical-rl" },
                ".vertical-writing-lr": { "writing-mode": "vertical-lr" },
                // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
                ".orientation-mixed": { "text-orientation": "mixed" },
                ".orientation-upright": { "text-orientation": "upright" },
                ".orientation-sideways-right": {
                    "text-orientation": "sideways-right",
                },
                ".orientation-sideways": { "text-orientation": "sideways" },
                ".orientation-glyph": {
                    "text-orientation": "use-glyph-orientation",
                },
            });
        }),
    ],
};
export default config;
