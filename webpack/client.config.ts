import path from 'path';
import webpack, { Configuration } from 'webpack';

import { IS_DEV } from './env';
import tsLoader from './loaders/ts';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import audioLoader from './loaders/audio';

const IS_SSR = process.env.SR === 'server';

export default {
  mode: IS_DEV ? 'development' : 'production',
  name: 'client',
  entry: {
    bundle: [
      // magic that doesn't work, dunno why
      IS_DEV && 'react-hot-loader/patch',
      // special path from hot-reload would fetch
      IS_DEV && 'webpack-hot-middleware/client?path=/__webpack_hmr',
      IS_SSR ? './src/client/index.tsx' : './src/client/index-csr.tsx',
    ].filter(Boolean),
    // sw: { import: './src/client/sw.js', filename: 'sw.js' },
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      tsLoader.client,
      cssLoader.client,
      fileLoader.client,
      audioLoader.client,
    ],
  },
  plugins: [
    // Plugin for hot replacement of built bundle
    IS_DEV && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
} as Configuration;
