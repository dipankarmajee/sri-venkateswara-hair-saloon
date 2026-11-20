import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#07090C",
          900: "#0B0E13",
          850: "#10141B",
          800: "#161B24",
          750: "#1E2532",
          700: "#273040",
          600: "#374357",
        },
        gold: {
          50: "#FAF6EF",
          100: "#F4ECD9",
          200: "#E8D7B0",
          300: "#DAC086",
          400: "#CBA95C",
          DEFAULT: "#C5A880",
          light: "#E2C8A4",
          dark: "#9E7B45",
        },
        crimson: {
          DEFAULT: "#A8262B",
          light: "#C63339",
          dark: "#78181C",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(197, 168, 128, 0.15) 0%, transparent 60%)',
        'subtle-grid': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
export default config;
