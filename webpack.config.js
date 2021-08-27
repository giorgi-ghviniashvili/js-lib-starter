const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'd3-chart-module.js',
    library: {
      type: "umd",
      name: "d3Chart"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      module: [path.resolve(__dirname, 'src')]
    }
  },
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
    })],
  },
};