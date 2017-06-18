var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST = path.resolve(__dirname, 'dist');

var config = {
  entry: ['./server.js'],
  output: {
    path: DIST,
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
      { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })]
}

module.exports = config;
