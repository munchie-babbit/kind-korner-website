import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        customOrange: "#F89052",
        customGreen: "#80B565",
        customDarkGreen: "#3F6A3C",
      },
      backgroundColor: {
        background: "#F3EDDD",
        customOrange: "#F89052",
        customGreen: "#80B565",
        customDarkGreen: "#3F6A3C",
      },
      borderColor: {
        customOrange: "#F89052",
        customDarkGreen: "#3F6A3C",
      },
    },
  },
  plugins: [],
};
export default config;
