import express, { Express } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack/client.config';
import router from './router';

const app: Express = express();

const IS_DEV = process.env.NODE_ENV !== 'production';

if (IS_DEV) {
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
    }),
  );
  app.use(
    webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
    }),
  );
}

app
  .use(express.static(path.join(__dirname, '../dist')))
  .use(router);

// eslint-disable-next-line import/prefer-default-export
export { app };
