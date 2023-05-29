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
              'entepreneur': 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80")',
              'office': 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80")',
              'pyramid': 'url("https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1577&q=80")',
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
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
}

