const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
};
