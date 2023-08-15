/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1360px',
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
