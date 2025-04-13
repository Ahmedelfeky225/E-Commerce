// import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-max": "991px",
        "sm-max": "576px",
      },
    },
  },
  // plugins: [daisyui],
};
