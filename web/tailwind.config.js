/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['Public Sans', 'sans-serif'],
                'text-lg': ['Poppins', 'sans-serif'],
                logo: ['Pacifico', 'cursive'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
