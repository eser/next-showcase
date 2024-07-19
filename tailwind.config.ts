import { type Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {},
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [
    typography,
    fluid,
    daisyui,
  ],
};

export default config;
