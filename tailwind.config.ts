import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        brand: {
          navy: "rgb(var(--brand-navy) / <alpha-value>)",
          blue: "rgb(var(--brand-blue) / <alpha-value>)",
          green: "rgb(var(--brand-green) / <alpha-value>)",
          gold: "rgb(var(--brand-gold) / <alpha-value>)"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
