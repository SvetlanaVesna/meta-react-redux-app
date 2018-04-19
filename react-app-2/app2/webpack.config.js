const path = require('path');
const webpack = require('webpack');
const appPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      appPath
    ]
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: buildPath,
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: [path.resolve(__dirname, 'node_modules')],
      loader: 'babel-loader',
    }
    ],
  },
  // node: {
  //   fs: 'empty'
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  devtool: 'source-map',
  externals: [],
  devServer: {
  watchOptions: {
    aggregateTimeout: 300,
      poll: 1000,
    host: HOST,
    port: PORT,
    historyApiFallback: {
      index: ''
    },

      hot: true,

      publicPath: '',
      stats: 'errors-only',
    index: `/src/index.html`

  }
}
};