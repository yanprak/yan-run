import express, { Express } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack/client.config';
import router from './router';
import { cookieParser } from './middlewares';
import queryString from './utils/queryString';

const app: Express = express();

const IS_DEV = process.env.NODE_ENV !== 'production';

if (IS_DEV) {
  app.all('/backend:requestUri(*)', cookieParser, (req, res) => {
    const query = queryString(req.query);
    const { requestUri } = req.params;
    const fullPath = query.length > 0 ? `${requestUri}?${query}` : requestUri;
    console.log(req.method, 'PROXY REQUEST TO', fullPath);
    const {
      WEB_HOST = '',
      WEB_PORT = '',
      API_HOST = '',
      API_PORT = 3500,
    } = process.env;
    console.log('FROM:', `${WEB_HOST}:${WEB_PORT}`, 'TO:', `${API_HOST}:${API_PORT}`);
    const redirectUrl = `${API_HOST}:${API_PORT}${fullPath}`;
    console.log('FINALIZED URL:', redirectUrl);
    res.redirect(307, redirectUrl);
  });
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
