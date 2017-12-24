const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    './client/js/index.jsx',
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: [`${__dirname}/client`],
    }, {
      test: /\.scss$/,
      include: `${__dirname}/client`,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader',
        ],
      }),
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    }],
  },
};
