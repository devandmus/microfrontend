const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const baseConfig = require('./base');
const { dependencies } = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mf1: 'mf1@http://localhost:8081/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);
