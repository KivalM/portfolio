/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite/**/*.js", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Inter var', 'Inter', 'sans-serif'],
      'nanum': ['Nanum Gothic', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'noto': ['Noto Sans Display', 'sans-serif'],
      'kode': ['Kode Mono', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('flowbite/plugin')
  ],
}

