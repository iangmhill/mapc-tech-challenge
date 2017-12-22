const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    './client/js/index.jsx',
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: true,
      allChunks: true,
    }),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /^\.\/(en)$/),
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: [`${__dirname}/client`],
      query: {
        presets: ['react-hmre'],
      },
    }, {
      test: /\.scss$/,
      include: `${__dirname}/client/sass`,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
      exclude: /node_modules/,
    }],
  },
};
