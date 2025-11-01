// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/@heroui/theme/dist/components/(autocomplete|badge|breadcrumbs|button|card|chip|divider|input|navbar|pagination|select|spinner|toggle|tabs|popover|ripple|form|listbox|scroll-shadow).js',
    ],
    darkMode: 'class',
    plugins: [heroui()],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
            },
        },
    },
};
