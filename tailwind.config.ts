import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1295px",
      },
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

        input: {
          text: "var(--input-text)",
          border: "var(--input-border)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
