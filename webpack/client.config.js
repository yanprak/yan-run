const path = require('path');

const tsLoader = require('./loaders/ts');
const fileLoader = require('./loaders/file');
const cssLoader = require('./loaders/css');

const IS_SSR = process.env.SR === 'server';

module.exports = {
  entry: {
    bundle: IS_SSR ? './src/client/index.tsx' : './src/client/index-csr.tsx',
    // sw: { import: './src/client/sw.js', filename: 'sw.js' },
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      tsLoader.client,
      cssLoader.client,
      fileLoader.client,
    ],
  },
};
