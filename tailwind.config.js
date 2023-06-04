/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          backgroundImage: {
              'body': 'url("/liquid-cheese.svg")',
              'services-bg': 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(100deg, rgba(255, 255, 255, 0.1) 25%, rgba(0, 0, 0, 0) 25%)'
          }
      },
      
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    primary: "#8a528d",
                    "primary-focus": "#c4a0c7",
                    secondary: "#536a86",
                    "secondary-focus": "#617997"
                  },
            }
        ]
    },
  plugins: [require("daisyui")],
}

