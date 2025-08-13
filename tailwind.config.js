/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#006FFD",
					50: "#EAF2FF",
					100: "#B4DBFF",
					200: "#6FBAFF",
					300: "#2897FF",
				},
				secondary: {
					success: {
						DEFAULT: "#298267",
						50: "#3AC0A0",
						100: "#00E6A8",
					},
					warning: {
						DEFAULT: "#E86339",
						50: "#FFF4E4",
						100: "#FFB37C",
					},
					error: {
						DEFAULT: "#ED3241",
						50: "#FFE2E5",
						100: "#FF616D",
					},
				},
				neutral: {
					light: {
						DEFAULT: "#C5C6CC",
						50: "#FFFFFF",
						100: "#F8F9FE",
						200: "#E8E9F1",
						300: "#D4D6DD",
					},
					dark: {
						DEFAULT: "#1F2024",
						50: "#8F9098",
						100: "#71727A",
						200: "#494A50",
						300: "#2F3036",
					},
				},
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				// headings
				".heading-text-h1": {
					fontSize: 24,
					fontWeight: "800",
				},
				".heading-text-h2": {
					fontSize: 18,
					fontWeight: "800",
				},
				".heading-text-h3": {
					fontSize: 16,
					fontWeight: "800",
				},
				".heading-text-h4": {
					fontSize: 14,
					fontWeight: "700",
				},
				".heading-text-h5": {
					fontSize: 12,
					fontWeight: "700",
				},

				// body
				".body-text-xl": {
					fontSize: 18,
					fontWeight: "400",
				},
				".body-text-l": {
					fontSize: 16,
					fontWeight: "400",
				},
				".body-text-m": {
					fontSize: 14,
					fontWeight: "400",
				},
				".body-text-s": {
					fontSize: 12,
					fontWeight: "400",
				},
				".body-text-xs": {
					fontSize: 10,
					fontWeight: "500",
				},

				// action
				".action-text-l": {
					fontSize: 14,
					fontWeight: "600",
				},
				".action-text-m": {
					fontSize: 12,
					fontWeight: "600",
				},
				".action-text-s": {
					fontSize: 10,
					fontWeight: "600",
				},

				// caption
				".caption-text-m": {
					fontSize: 10,
					fontWeight: "600",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
