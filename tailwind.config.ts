import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      glass: {
        DEFAULT: {
          bg: "rgba(255, 255, 255, 0.1)",
          blur: "20px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#00030b",
          content1: "#0d0d10",
        }
      }
    }
  })],
};
export default config;
