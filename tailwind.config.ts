
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        unbounded: ['var(--font-unbounded)'],
        inter_tight: ['var(--font-inter-tight)'],
        mr_dafoe: ['var(--font-mr_dafoe)']
      }
    },
  },
  plugins: [],
};
export default config;
