/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      colors: {
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        body: "var(--body-color)",
        heading: "var(--heading-color)",
        line: "var(--line-color)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
