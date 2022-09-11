const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.vue',
    ],
    theme: {
        colors: ({colors}) => ({
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: '#000',
            white: '#fff',
            gray: colors.gray,
            // red: colors.red.100,
        }),
        extend: {},
    },
    plugins: [],
};
