module.exports = {
    content: ['./src/**/*.astro', './src/**/*.tsx', './src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.vue', './src/**/*.svelte'],
    theme: {
        extends: {

        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}