const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--satoshi)', ...fontFamily.sans],
            },
            colors: {
                black: '#28292e',
                white: '#fdffff',
            },
            gridTemplateRows: {
                7: 'repeat(7, minmax(0, 1fr))',
            },
            gridTemplateColumns: {
                7: 'repeat(7, minmax(0, 1fr))',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        plugin(function ({ addVariant }) {
            addVariant('second-last-child', '&:nth-last-child(2)')
            addVariant('third-last-child', '&:nth-last-child(3)')
            addVariant('hocus', ['&:hover', '&:focus'])
        }),
    ],
}
