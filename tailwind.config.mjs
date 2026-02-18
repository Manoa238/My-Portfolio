/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: {
            950: '#050507',
            900: '#0a0a0f',
            800: '#13131f',
            700: '#1c1c2e',
            card: '#0f0f16',
          },
          neon: {
            400: '#00f5ff',
            500: '#00dbe6',
          }
        },
      },
    },
    plugins: [],
  };
  
  export default config;