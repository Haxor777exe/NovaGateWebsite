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
        // Service card theming
        'sc-border': 'rgb(var(--sc-border) / <alpha-value>)',
        'sc-icon': 'rgb(var(--sc-icon) / <alpha-value>)',
        'sc-overlay': 'rgb(var(--sc-overlay) / <alpha-value>)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'sc-base': '0 10px 15px -3px rgb(var(--sc-shadow) / 0.3), 0 4px 6px -4px rgb(var(--sc-shadow) / 0.3)',
        'sc-hover': '0 10px 15px -3px rgb(var(--sc-shadow) / 0.6), 0 4px 6px -4px rgb(var(--sc-shadow) / 0.6)'
      }
    },
  },
  plugins: [],
};
export default config;
