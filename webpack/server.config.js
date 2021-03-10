const path = require('path');
const nodeExternals = require('webpack-node-externals');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsLoader = require('./loaders/ts.js');
const fileLoader = require('./loaders/file.js');
const cssLoader = require('./loaders/css.js');

const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },

  entry: path.join(__dirname, '..', 'src', 'server', 'server.ts'),

  module: {
    rules: [
      tsLoader.server,
      cssLoader.server,
      fileLoader.server
    ],
  },

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist'),
    publicPath: '/static/',
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './server.tsconfig.json' })],
  },

  performance: {
    hints: IS_DEV ? false : 'warning',
  },

  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

  optimization: { nodeEnv: false },
};
