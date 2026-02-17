import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#C3F234", // Neon Green/Yellow from previous implementation possibility
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-crimson)'],
                cursive: ['var(--font-dancing)', 'cursive'],
            }
        },
    },
    plugins: [],
};
export default config;
