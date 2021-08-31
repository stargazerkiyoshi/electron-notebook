const { merge } = require('webpack-merge');
const [ electronMainConfig, electronRenderConfig ] = require('./webpack.common');
const path = require('path');

module.exports = [
  electronMainConfig,
  merge(electronRenderConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      port: 8888,
      hot: true,
    },
  })
]