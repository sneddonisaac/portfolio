const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'satoshi-regular': "'Satoshi Regular', sans-serif",
                'satoshi-medium': "'Satoshi Medium', sans-serif",
                'satoshi-bold': "'Satoshi Bold', sans-serif",
            },
            colors: {
                black: '#28292e',
                white: '#fdffff',
            },
            gridTemplateRows: {
                '7': 'repeat(7, minmax(0, 1fr))',
            },
            gridTemplateColumns: {
                '7': 'repeat(7, minmax(0, 1fr))',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function({ addVariant }) {
            addVariant('second-last-child', '&:nth-last-child(2)')
            addVariant('third-last-child', '&:nth-last-child(3)')
            addVariant('hocus', ['&:hover', '&:focus'])
        })
    ],
}
