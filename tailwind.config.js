/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        surface: "#FFFFFF",
        primary: "#6366F1",
        secondary: "#0EA5E9",
        accent: "#EC4899",
        success: "#10B981",
        muted: "#475569",
        text: "#0F172A",
        border: "rgba(15, 23, 42, 0.06)",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.08)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.12), 0 0 60px rgba(99, 102, 241, 0.06)',
        'glow-lg': '0 8px 32px rgba(99, 102, 241, 0.08), 0 0 80px rgba(99, 102, 241, 0.04)',
        'glow-xl': '0 16px 64px rgba(99, 102, 241, 0.1), 0 0 120px rgba(99, 102, 241, 0.05), 0 4px 24px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 24px rgba(15, 23, 42, 0.04), 0 1px 4px rgba(15, 23, 42, 0.02)',
        'card-hover': '0 12px 48px rgba(99, 102, 241, 0.08), 0 4px 16px rgba(15, 23, 42, 0.04), 0 0 40px rgba(99, 102, 241, 0.03)',
        'card-3d': '0 20px 60px rgba(15, 23, 42, 0.08), 0 4px 20px rgba(15, 23, 42, 0.04), 0 0 80px rgba(99, 102, 241, 0.02)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(15, 23, 42, 0.02)',
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
        'rotate-in': 'rotateIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'rotate-in-delay': 'rotateIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-spring': 'slideUpSpring 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-spring-delay': 'slideUpSpring 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-flow': 'borderFlow 6s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'counter-roll': 'counterRoll 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'perspective(1000px) rotateY(-12deg) scale(0.92)' },
          '100%': { opacity: '1', transform: 'perspective(1000px) rotateY(0deg) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUpSpring: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        borderFlow: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        counterRoll: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      perspective: {
        '800': '800px',
        '1000': '1000px',
        '1200': '1200px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
