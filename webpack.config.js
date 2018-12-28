const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
})

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: './dist/main.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: { loader: "babel-loader" },
    }, {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        }],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ]
    }],
  },
  plugins: [htmlPlugin],
}