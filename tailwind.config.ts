import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Dark Mode Palette
        background: {
          DEFAULT: "#0F1115",
          secondary: "#161920",
        },
        surface: {
          DEFAULT: "rgba(0, 0, 0, 0.6)",
          border: "rgba(255, 255, 255, 0.1)",
        },
        // Accent Colors
        corporate: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
          glow: "rgba(59, 130, 246, 0.4)",
        },
        emotion: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
          rose: "#EC4899",
          glow: "rgba(139, 92, 246, 0.4)",
        },
        // Text Colors
        text: {
          primary: "#FFFFFF",
          secondary: "#E5E7EB",
          muted: "#9CA3AF",
        },
        // Utility
        rec: "#EF4444",
        success: "#10B981",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-corporate": "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
        "gradient-emotion": "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
        "gradient-mixed": "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-corporate": "0 0 40px rgba(59, 130, 246, 0.3)",
        "glow-emotion": "0 0 40px rgba(139, 92, 246, 0.3)",
        "glow-rose": "0 0 40px rgba(236, 72, 153, 0.3)",
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        marquee: "marquee 30s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
