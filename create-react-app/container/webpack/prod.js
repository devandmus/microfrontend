const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const baseConfig = require('./base');
const { dependencies } = require('../package.json');

const domain = 'http://localhost:3001'

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mf1: `mf1@${domain}/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
