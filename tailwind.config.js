/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark':   "url('./images/bg-desktop-dark.jpg')",
        'desktop-light':  "url('./images/bg-desktop-light.jpg')",
        'mobile-dark':    "url('./images/bg-mobile-dark.jpg')",
        'mobile-light':   "url('./images/bg-mobile-light.jpg')",
        'icon-check':     "url('./images/icon-check.svg')",
        'icon-cross':     "url('./images/icon-cross.svg')",
        'icon-moon':      "url('./images/icon-moon.svg')",
        'icon-sun':       "url('./images/icon-sun.svg')",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans",]
      },
      colors: {
        // Primary Colors
        'bright-blue': 'hsl(220, 98%, 61%)',
            // linear gradient
        'linear-gradient-1': 'hsl(192, 100%, 67%)',
        'linear-gradient-2': 'hsl(280, 87%, 65%)',
        // light theme
        'very-light-gray':          'hsl(0, 0%, 98%)',
        'very-light-grayish-blue':  'hsl(236, 33%, 92%)',
        'light-grayish-blue':       'hsl(233, 11%, 84%)',
        'dark-grayish-blue':        'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue':   'hsl(235, 19%, 35%)',
        // dark theme
        'very-dark-blue':              'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue':  'hsl(235, 24%, 19%)',
        'light-grayish-blue':          'hsl(234, 39%, 85%)',
        'light-grayish-blue-(hover)':  'hsl(236, 33%, 92%)',
        'dark-grayish-blue-1':         'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-1':    'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-2':    'hsl(237, 14%, 26%)',
      },
    },

  },
  plugins: [],
}
