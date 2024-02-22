/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#fe6700",
        primaryContent: "#fff",
        primaryBg: "#001019",
        primaryAccent: "#5cd2c6",
        primaryBase: "#663de4",
        primarySubcontent: "#eaff01",
      },
    },
  },
  plugins: [],
};
