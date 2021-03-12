const path = require('path');

const tsLoader = require('./loaders/ts');
const fileLoader = require('./loaders/file');
const cssLoader = require('./loaders/css');

module.exports = {
  entry: {
    bundle: './src/client/index.tsx',
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
