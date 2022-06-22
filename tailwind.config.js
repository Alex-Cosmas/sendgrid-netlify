module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Defaults
      fontFamily: {
        main: ["Inter", "san-serif"],
        // body: ['Red Hat Text', 'san-serif'],
      },

      // Typography

      fontSize: {
        title1: "56px",
        title2: "48px",
        title3: "40px",
        title4: "32px",
        title5: "24px",
        title6: "20px",

        body10: "10px",
        body12: "12px",
        body14: "14px",
        body16: "16px",
        body18: "18px",
        body20: "20px",

        // Body: {
        //   10: "10px",
        //   12: "12px",
        //   14: "14px",
        //   16: "16px",
        //   18: "18px",
        //   20: "20px",
        // },
      },

      // Responsiveness

      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        wrap: "1236px",
        laptopL: "1440px",
      },

      // Colors

      colors: {
        sflPrimary: "var(--sflPrimary)",

        secondary: "#332421",
        optional: "#DBD3BF",

        //
        background: "#E5E5E5",

        sflBlack: {
          soft: "#003300",
          option: "#0d0d0d",
        },

        beige: "#DBD3BF",
        yellow: "#22211fd",
        blue: "#73b1f0",
        notification: "#F2F8E9",
        green: {
          primary: "#8DC63F",
          hover: "#91dab4",
          focused: "#219653",
          100: "#f2f8e9",
          200: "#a2b38c",
          300: "#d9ecbf",
          400: "#CCE5A9",
          500: "#BFDF94",
          600: "#B3D97F",
          700: "#A6D269",
          800: "#99cc54",
        },

        red: {
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
        },
      },
      // State

      active: {},
      disabled: {},
      focused: {},
      alert: {},

      // Height & Width Values

      height: (theme) => ({
        "screen/1": "100vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      totalWidth: {
        1200: "1200px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },

      // Misc
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
