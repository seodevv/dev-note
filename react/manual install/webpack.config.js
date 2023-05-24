const path = require("path");
const webpack = require("webpack");

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
                  browsers: ["> 1% in KR"], // browserslist 참고 !
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          // Plugins: [],
        },
      },
    ],
  },

  // Plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력
};
