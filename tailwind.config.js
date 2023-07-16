/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        20: '1.25rem',
      },
      lineHeight: {
        60: '3.75rem',
      },
      colors: {
        primary: '#163369',
        secondary: '#47B5FF',
        mediumblue: '#465E8B',
        lightblue: '#0EA5E9',
        lightgray: '#909CB2',
        blue: '#3057A3',
        mediumblack: '#232323',
        'orange-50': '#FFF8ED',
        'cyan-50': '#ECFEFF',
        'teal-50': '#F0FDFA',
        'blue-50': '#F0F9FF',
      },
      padding: {
        '17px': '1.0625rem',
        '9px': '0.5625rem',
        '43px': '2.71875rem',
        '100px': '6.25rem',
        '38px': '2.375rem',
      },
      margin: {
        '100px': '6.25rem',
        '5px': '0.3125rem',
        '70px': '4.375rem',
        '145px': '9.0625rem',
      },
      gap: {
        '91px': '5.6875rem',
        '11px': '0.6875rem',
      },
      height: {
        '714px': '44.625rem',
        '52px': '3.25rem',
        '190px': '11.875rem',
      },
      width: {
        '52px': '3.25rem',
      },
      spacing: {
        '261px': '16.3125rem',
        '67px': '4.1875rem',
      },
      borderRadius: {
        '10px': '0.625rem',
      },
    },
  },
  plugins: [],
};
