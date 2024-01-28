import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs": "0.6rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-color": "#fadcf5",
        "bg-secondary": "#840028",
        "bg-disabled": "#474243",
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "reverse-slow-spin": "reverse-spin 3s linear infinite",
        "reverse-xslow-spin": "reverse-spin 9s linear",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
