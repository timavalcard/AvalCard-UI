/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '.75rem',
      screens: {
        'sm': '540px',
        'md': '720px',
        'lg': '960px',
        'xl': '1140px',
        '2xl': '1320px',
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'green-light-2': '#3664FF',
        greenLight: '#3664FF',
        'green-light': '#3664FF',
        'muted-light-2': '#F4F4F4',
        'muted-light': '#F8F8F8',
        'muted': '#BCBCBC',
        'muted-dark': '#8E8E8E',
        'muted-0': '#656565',
        'muted-1': '#464646',
        'muted-2': '#5B5B5B',
        'muted-2.5': '#555555',
        'muted-3': '#6D6D6D',
        'muted-4': '#B1B1B1',
        'muted-5': '#A7A7A7',
        'custom-red-light': '#FF4D4D33',
        'custom-red': '#FF4D4D',
        'custom-red-2': '#FF3535',
        'custom-yellow-light-2': '#D7DA1F33',
        'custom-yellow-light': '#FF7B0033',
        'custom-yellow': '#FF7B00',
        'custom-yellow-2': '#FFCC00',
        'custom-yellow-3': '#FFC069',
        'blue-custom': '#3664FF',
        'blue-light': '#F6F9FF',
        'blue-dark-custom': '#003366',
        'blue-light-custom': '#F0F5FF',
        'gray-custom': '#55636F',
        'green-custom': '#00CC99'
      },
      fontSize: {
        'xxs': '.625rem',
        '3xs': '.5rem',
        '4xs': '.375rem',
      },
      borderRadius: {
        '2lg': '10px',
        '5xl': '32px'
      },
      backgroundImage: {
        'white': '#fff',
        'blue-custom-gradient': 'linear-gradient(101.45deg, #B4C0FF -7.53%, #3F5AEF 43.52%)',
        'blue-custom-gradient-2': 'linear-gradient(301.45deg, #8B9DFF -7.53%, #1B3BE7 43.52%)',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
