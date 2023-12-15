import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ['var(--font-raleway)', "ui-sans-serif", "system-ui"],
            serif: ["var(--font-playfair-display)", "ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-opentype"),
        require("tailwindcss-react-aria-components"),
    ],
};
export default config;
