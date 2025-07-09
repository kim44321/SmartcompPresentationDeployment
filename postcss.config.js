// const tailwindcss = require("tailwindcss");
// module.exports = {
//   plugins: ["postcss-preset-env", tailwindcss],
// };

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };


module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Add this if you need it
    "postcss-nesting": {},
  },
};
