/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary10: '#F7F2EE',
        primary100: '#BF9D7D',
        primary120: '#7B6651',
        neutral: '#140F0A',
        neutral0: '#FFFFFF',
        neutral10: '#F7F2EE',
        neutral40: '#ECECEC',
        neutral60: '#909090',
        neutral80: '#4B4B4B',
        neutral100: '#000000',
        neutralBG: '#140F0A'
      }
    },
    fontFamily: {
      sans: ['Noto Serif TC']
    }
  },
  plugins: []
}
