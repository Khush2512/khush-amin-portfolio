import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070709",
        surface: "#0f0f13",
        "surface-card": "#13131a",
        border: "#27272a",
        "border-glow": "#3f3f46",
        accent: {
          purple: "#a855f7",
          "purple-glow": "#9333ea",
          emerald: "#34d399",
          "emerald-glow": "#10b981",
          cyan: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)",
        "card-glow": "radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(168, 85, 247, 0.1), transparent 40%)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "pulse-slow": "pulseGlow 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
