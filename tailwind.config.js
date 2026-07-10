/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090e",
        surface: "#11121a",
        primary: "#6366F1", // Smooth Indigo
        secondary: "#0EA5E9", // Smooth Sky Blue
        accent: "#EC4899", // Soft Rose Accent
        success: "#10B981", // Emerald Green
        muted: "#94A3B8", // Blue-Slate Gray
        text: "#F8FAFC",
        border: "rgba(99, 102, 241, 0.08)", // Softer primary border tint
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        'marquee-slow': 'marquee 50s linear infinite',
        'marquee-fast': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
