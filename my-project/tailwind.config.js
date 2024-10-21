/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      boxShadow: {
        'deep-blue': '0 10px 15px -3px rgba(0, 0, 139, 0.5), 0 4px 6px -4px rgba(0, 0, 139, 0.5)'
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      // Combine all animations here
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        pulse: "pulse var(--duration) ease-out infinite", // Add pulse animation here
      },
      // Combine all keyframes here
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
          "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
        },
      },
    },
  },
  plugins: [],
}
