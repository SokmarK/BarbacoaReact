/** @type {import('tailwindcss').Config} */

const toRem = (px) => `${px / 16}rem`;

const toRemArr = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr] = toRem(curr);
    acc[curr * -1] = toRem(curr * -1);
    return acc;
  }, {});
};

const values = [];
for (let i = 0; i <= 300; i++) {
  if (i <= 100) {
    values.push(i);
  } else if (i % 5 === 0) {
    values.push(i);
  }
}
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: toRemArr(values),
    },
    colors: {
      red: {
        DEFAULT: "#CC3B34",
        dark: "#2C0805",
      },
      yellow: {
        DEFAULT: "#F5E1B5",
      },
      gray: {
        10: "#F5F3F4",
        20: "#D9D9D9",
        30: "#D5D1CC",
      },
    },
  },
  plugins: [],
};
