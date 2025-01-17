import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Black
        foreground: "#FFFFFF", // White
        primary: "#FFD700",    // Gold
        accent1: "#8B0000",    // Deep Red
        accent2: "#003366",    // Navy Blue
        accent3: "#F5E6CC",    // Champagne Beige
        neutral1: "#333333",   // Charcoal Gray
        neutral2: "#C0C0C0",   // Soft Silver
      },
    },
  },
  
  plugins: [],
} satisfies Config;
