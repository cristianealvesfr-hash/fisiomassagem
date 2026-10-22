/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#3E1B4F',
          dark: '#2E113C',
          light: '#592970',
          50: '#FBF7FC',
          100: '#F3EBF7',
          200: '#E4CFED',
          800: '#3E1B4F',
          900: '#2A1037'
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFC07F',
          dark: '#A8843F',
          amber: '#D4AF37'
        },
        wine: {
          DEFAULT: '#450a0a',
          dark: '#360912',
          card: '#2c0810'
        },
        cream: {
          50: '#FCFAF7',
          100: '#FAF8F5',
          200: '#F6F2EB',
          300: '#EEE7DC'
        },
        charcoal: {
          DEFAULT: '#1F1A24',
          muted: '#4A4453',
          light: '#716B7B'
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Playfair Display"', 'cursive']
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(62, 27, 79, 0.08)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
        'luxury': '0 20px 40px -15px rgba(31, 26, 36, 0.12)'
      }
    },
  },
  plugins: [],
}
