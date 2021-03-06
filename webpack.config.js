const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/simpleContent.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "simpleContent.js",
    library: "simpleContent",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CopyPlugin([{ from: "testPage.html", to: "testPage.html" }])]
};
