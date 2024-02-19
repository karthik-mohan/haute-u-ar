/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      height: {
        'screen/90': '90vh',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // other theme configurations
  },
  // other configurations
};
