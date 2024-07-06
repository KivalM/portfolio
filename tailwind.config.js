/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans Display Variable', 'Inter var', 'Inter', 'sans-serif'],
      'nanum': ['Nanum Gothic', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'noto': ['Noto Sans Display Variable', 'sans-serif'],
      'kode': ['Kode Mono Variable', 'monospace'],
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["black"],
          primary: "#2563eb",
          secondary: "#10b981",
          accent: "#fcd34d",
          "base-content": "#f9fafb",
          "base-100": "#18181b",
        },
      },
      "winter", // first one will be the default theme
    ],
  },
};