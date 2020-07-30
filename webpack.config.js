const path = require("path");

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "index.js",
  },
  resolve: {
    alias: {
      "@utilities": path.resolve(__dirname, "src/scripts/utilities"),
      "@modules": path.resolve(__dirname, "src/scripts/modules"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
