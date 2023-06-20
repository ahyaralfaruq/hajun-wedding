/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            colors: {
                swanWhite: "#d7d4d7",
                softBlack: "#0e1111",
            },
            fontFamily: {
                'greatVibes': ['greatvibes', 'sans-serif'],
                'karla': ['karla', 'sans-serif'],
                "normal" : ["philosopher", "sans-serif"]
            },
            screens: {
                "sm" : "320px",
                "md" : "768px",
                "lg" : "1024px",
                "xl" : "1280px",
                "2xl" : "1536px"
            }
        }
    },
    plugins: [],
}