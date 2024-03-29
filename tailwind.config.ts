import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        screen: "100vh",
      },
      textColor: {
        customOrange: "#F89052",
        customGreen: "#80B565",
        customDarkGreen: "#1A4841",
        customPink: "#E88D71",
        customBlue: "#CADAD7",
        customWhite: "#FFF9F4",
      },
      backgroundColor: {
        background: "#FFF9F4", // #FFF9F4 or #F3EDDD
        customOrange: "#F89052",
        customGreen: "#80B565",
        customDarkGreen: "#1A4841",
        customPink: "#E88D71",
        customBlue: "#CADAD7",
      },
      borderColor: {
        customOrange: "#F89052",
        customDarkGreen: "#1A4841",
        customPink: "#E88D71",
        customBlue: "#CADAD7",
        customWhite: "#FFF9F4",
      },
    },
  },
  plugins: [],
};
export default config;
