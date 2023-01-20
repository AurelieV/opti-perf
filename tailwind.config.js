/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js}"],
    theme: {
        extend: {
            animation: {
                "ping-once": "wiggle 1s linear",
            },
            keyframes: {
                wiggle: {
                    "0%, 50%, 100%": { transform: "none" },
                    "25%": { transform: "scale(1.2)" },
                    "75%": { transform: "scale(1.2)" },
                },
            },
        },
    },
    plugins: [],
};
