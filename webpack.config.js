const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 7777,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
