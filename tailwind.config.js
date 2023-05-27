/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          backgroundImage: {
              'header-cover': 'url("https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
              'services': 'url("/pattern.svg")'
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
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
}

