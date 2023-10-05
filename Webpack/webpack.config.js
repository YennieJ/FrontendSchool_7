const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  // 번들링 하고싶은 파일이 하나일때
  // entry: "./source/index.js",
  // 번들링 하고싶은 파일이 여러개 일때
  entry: { index: "./source/index.js", about: "./source/about.js" },
  output: {
    // __dirname은 현재 webpack.config.js 파일이 위치하고 있는 경로를 알려주는 변수
    // 뒤에는 위치하고싶은 파일 이름.
    path: path.resolve(__dirname, "public"),
    // 번들링 하고싶은 파일이 하나일때
    // filename: "index_bundle.js",
    // 번들링 하고싶은 파일이 여러개 일때
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  // template: 어떤 파일을 filename: 어떤 이름으로 chunks: 어떤 entry file을
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./source/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};
