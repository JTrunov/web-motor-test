import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tab: {
          bg: "var(--tab-bg)",
          text: "var(--tab-text)",
        },

        selected: {
          bg: "var(--selected-bg)",
          text: "var(--selected-text)",
        },

        button: {
          bg: "var(--button-bg)",
          hover: "var(--button-hover)",
          text: "var(--button-text)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
