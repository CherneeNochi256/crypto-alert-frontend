/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontFamily: {
            'noto-sans-georgian': ['Noto Sans Georgian', 'ui-sans-serif', 'system-ui']
        },
        container: {
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1200px',
                '2xl': '1200px',
            },
        },
        extend: {
            colors: {
                'my-black': '#0f051d',
                'sidebar-black': '#131722',
                'my-purple': '#130749',
                'my-white': '#f3f2f4',
                'my-brown': '#ffffff0d',
                'my-brown2': 'rgba(52,47,47,0.06)',
                'my-gray': '#82828240',
                'shadow-color': 'rgba(111,57,205,.3)'
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')

    ]
}

