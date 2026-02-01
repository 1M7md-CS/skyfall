import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/app/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"foreground-border": "var(--foreground-border)",
				primary: "var(--primary)",
				muted: "var(--muted)",
				"muted-foreground": "var(--muted-foreground)",
				light: "var(--text)",
			},
			fontFamily: {
				playfair: ['var(--font-playfair)', 'serif'],
				barlow: ['var(--font-barlow)', 'sans-serif'],
				inter: ['var(--font-inter)', 'sans-serif'],
			},
			letterSpacing: {
				'minus06': '-0.006em',
			},
		},
	},
	plugins: [],
};
export default config;