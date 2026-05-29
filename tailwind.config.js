/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#a1a1aa",
                accent: "#000000",
                bg: "#000000",
            },
            fontFamily: {
                sans: ["Inter", "Outfit", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
}
