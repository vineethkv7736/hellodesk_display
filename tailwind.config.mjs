/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '10xl': '10rem',  // Custom size
        '11xl': '12rem',  // Another custom size
        '12xl': '14rem',
        '13xl': '16rem',
        '14xl':'18rem',
        '15xl':'26rem',
        '16xl':'22rem',
        
      },
    },
  },
  plugins: [],
};
