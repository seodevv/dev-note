const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "WordrRlay-setting",
  mode: "development", // 실서비스: production
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // babel browserslist 참고
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"], // babel 작업할 때 hot 리로딩 기능(react-refresh)까지 추가해줌
        },
      },
    ],
  },

  // Plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  plugins: [new RefreshWebpackPlugin()], // 빌드할때마다 플러그인이 작동됨

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력

  devServer: {
    hot: true,
  }, // 소스 코드에 변경점을 생기면 저장한 결과물을 변경해줌
};
