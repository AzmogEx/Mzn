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
        // MIS Premium Editorial Palette
        background: {
          DEFAULT: "#FAFAFA",
          secondary: "#F4EFE6",
        },
        bone: "#FAFAFA",
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1a1a1a",
        },
        gold: {
          DEFAULT: "#C9A66B",
          light: "#E5D3A8",
          deep: "#B8956B",
          dark: "#9C7E4A",
          glow: "rgba(201, 166, 107, 0.45)",
        },
        // Aliases that previously powered "corporate" (blue) and "emotion" (violet)
        // are remapped to the editorial gold/ink palette so legacy classes still work.
        corporate: {
          DEFAULT: "#0A0A0A",
          light: "#1a1a1a",
          dark: "#000000",
          glow: "rgba(10, 10, 10, 0.35)",
        },
        emotion: {
          DEFAULT: "#C9A66B",
          light: "#E5D3A8",
          dark: "#B8956B",
          rose: "#C9A66B",
          glow: "rgba(201, 166, 107, 0.45)",
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.55)",
          border: "rgba(10, 10, 10, 0.08)",
        },
        text: {
          primary: "#0A0A0A",
          secondary: "#3a3a3a",
          muted: "#666666",
        },
        rec: "#EF4444",
        success: "#10B981",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #C9A66B 0%, #B8956B 100%)",
        "gradient-gold-soft": "linear-gradient(135deg, #E5D3A8 0%, #C9A66B 100%)",
        // Backwards-compat: corporate / emotion / mixed remapped to gold/ink
        "gradient-corporate": "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)",
        "gradient-emotion": "linear-gradient(135deg, #C9A66B 0%, #B8956B 100%)",
        "gradient-mixed": "linear-gradient(135deg, #E5D3A8 0%, #C9A66B 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(10, 10, 10, 0.08)",
        "glow-gold": "0 0 40px rgba(201, 166, 107, 0.35)",
        "glow-corporate": "0 18px 50px -12px rgba(10, 10, 10, 0.45)",
        "glow-emotion": "0 18px 50px -12px rgba(201, 166, 107, 0.55)",
        "glow-rose": "0 0 40px rgba(201, 166, 107, 0.35)",
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
          "0%": { boxShadow: "0 0 20px rgba(201, 166, 107, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(201, 166, 107, 0.4)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
