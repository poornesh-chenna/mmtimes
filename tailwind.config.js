/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    // screens: {
    //    sm: { min: '392px', max: '640px' },
    // xs: '392px',
    // },
    extend: {},
  },
  plugins: [flowbitePlugin],
}
