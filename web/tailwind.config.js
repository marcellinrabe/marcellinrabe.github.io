/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
          fontFamily: {
            'title': ['Public Sans', 'sans-serif'],
            'text-lg': ['Poppins', 'sans-serif'],
          },
        },
    },
    plugins: [],
};
