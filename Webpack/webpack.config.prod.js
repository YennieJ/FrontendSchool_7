const path = require("path");

module.exports = {
  mode: "production",
  entry: "./source/index.js",
  output: {
    // __dirname은 현재 webpack.config.js 파일이 위치하고 있는 경로를 알려주는 변수
    // 뒤에는 위치하고싶은 파일 이름.
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
};
