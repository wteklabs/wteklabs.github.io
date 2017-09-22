const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, './src'),
  resolve: {
    alias: {},
    extensions: ['.jsx', '.js']
  },
  entry: [
    require.resolve('webpack/hot/dev-server'),
    require.resolve('babel-polyfill'),
    require.resolve('./lib/particleground/jquery.particleground.js'),
    require.resolve('./src/js/index.js')
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        query: {
          presets: []
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {}
          },
          'resolve-url-loader'
        ]
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new InterpolateHtmlPlugin({
      NODE_ENV: process.env.NODE_ENV
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/public/index.html'),
      inject: 'body'
    })
  ]
};
