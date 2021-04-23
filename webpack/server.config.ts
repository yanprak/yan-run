import 'dotenv/config';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import {
  SRC_DIR,
  IS_DEV,
  DIST_DIR,
} from './env';

import tsLoader from './loaders/ts';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import audioLoader from './loaders/audio';

export default {
  mode: IS_DEV ? 'development' : 'production',
  name: 'server',
  target: 'node',
  node: { __dirname: false },

  entry: path.join(SRC_DIR, 'server', 'server.ts'),

  module: {
    rules: [
      tsLoader.server,
      cssLoader.server,
      fileLoader.server,
      audioLoader.server,
    ],
  },

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
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
