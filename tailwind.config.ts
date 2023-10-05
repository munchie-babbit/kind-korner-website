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
      },
      backgroundColor: {
        background: "#F3EDDD",
        customOrange: "#F89052",
        customGreen: "#80B565",
      },
      borderColor: {
        customOrange: "#F89052",
      },
    },
  },
  plugins: [],
};
export default config;
