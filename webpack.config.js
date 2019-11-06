const path = require("path");

module.exports = {
  entry: "./src/myLib.ts",
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
    filename: "mylib.js",
    library: "myLib",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  }
};
