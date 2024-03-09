/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        muted: '#868686',
        light: {
          DEFAULT: '#f9fafc',
          dark: '#f2f3f4',
          light: '#f9fafc',
        },
        primary: {
          DEFAULT: '#357bff',
          dark: '#0052ed',
          light: '#ebf2ff',
        },
        secondary: {
          DEFAULT: '#d5dae0',
          dark: '#9ba7b5',
          light: '#fbfbfc',
        },
        success: {
          DEFAULT: '#4CAF50',
          dark: '#3b873e',
          light: '#edf7ed',
        },
        info: {
          DEFAULT: '#4AC7F3',
          dark: '#0fade5',
          light: '#edf9fe',
        },
        warning: {
          DEFAULT: '#f8a13e',
          dark: '#e67f08',
          light: '#fef6ec',
        },
        danger: {
          DEFAULT: '#fa4040',
          dark: '#ec0606',
          light: '#feecec',
        },
        dark: {
          DEFAULT: '#0c193b',
          dark: '#09132d',
          light: '#d8e1f7',
        },
      },
      fontFamily: {
         'display': ['Sacramento'],
        'body': ['Saira'],
        'sans': ['Inter', 'Helvetica', '"sans-serif"'],
      },
      fontSize: {
        '3x': '3rem',
        '2hx': '2.5rem',
        '2qx': '2.25rem',
        3: '1.5rem',
        3: '1.35rem',
        4: '1.25rem',
        5: '1.15rem',
        6: '1.075rem',
        7: '0.95rem',
        8: '0.85rem',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      translate: {
        '1/10': '10%',
      },
      rotate: {
        '4': '4deg',
      },
      backgroundImage: {
        'gradient-112': 'linear-gradient(112deg, var(--tw-gradient-stops))'
      },
      animation: {
        'dropdown-fade-in': 'dropdown-fade-in 0.3s ease-in-out 1',
        'dropdown-fade-out': 'dropdown-fade-out 0.3s ease-in-out 1',
      },
      keyframes: {
        'dropdown-fade-in': {
          '0%': {
            opacity: 0,
            'margin-top': '0.75rem'
          },
          '100%': {
            opacity: 1,
            'margin-top': 0
          },
        },
        'dropdown-fade-out': {
          '0%': {
            opacity: 1,
            'margin-top': 0
          },
          '100%': {
            opacity: 0,
            'margin-top': '0.75rem'
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
