// import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        'md-max':'991px',
        'sm-max':'576px'
      }
    },
  },
  // plugins: [daisyui],
}

