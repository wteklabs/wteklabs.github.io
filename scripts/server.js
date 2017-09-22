'use strict';
const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.dev');
const open = require('open');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;
const serverUrl = `http://localhost:${PORT}/`;

webpackConfig.entry.unshift(`webpack-dev-server/client?${serverUrl}`);

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true

  },
  contentBase: [
    path.resolve(__dirname, '../src/assets'),
    path.resolve(__dirname, '../src/public')
  ],
  watchContentBase: true,
  compress: true,
  hot: true,
  overlay: true,
  publicPath: '/'
});

server.listen(PORT, HOST, function () {
  console.log(`Starting server on ${serverUrl}`);
  open(serverUrl);
});
