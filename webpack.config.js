const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [ {
      test: /\.css$/i,
      use: [ 'style-loader', 'css-loader' ],
    } ]
  },
  devServer: {
    port: 3000
  }
}