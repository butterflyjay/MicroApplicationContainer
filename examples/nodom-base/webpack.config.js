const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }
        ],
        exclude: /node_modules/
      }
    ],
  },
  mode: "development",
  devServer: {
    host: "localhost",
    port: "8080",
    open: true,
    hot: true
  },
  resolve: {
    extensions: [".js", "*", ".css"]
  }
}