/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite/**/*.js", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans Display Variable', 'Inter var', 'Inter', 'sans-serif'],
      'nanum': ['Nanum Gothic', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'noto': ['Noto Sans Display Variable', 'sans-serif'],
      'kode': ['Kode Mono Variable', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('flowbite/plugin')
  ],
}

