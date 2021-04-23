import express, { Express } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack/client.config';
import router from './router';
import { cookieParser } from './middlewares';

const app: Express = express();

const IS_DEV = process.env.NODE_ENV !== 'production';

if (IS_DEV) {
  app.all('/backend:requestUri(*)', cookieParser, (req, res) => {
    const { requestUri } = req.params;
    console.log(req.method, 'PROXY REQUEST TO', requestUri);
    const {
      WEB_HOST = '',
      WEB_PORT = '',
      API_HOST = '',
      API_PORT = 3500,
    } = process.env;
    console.log('FROM:', `${WEB_HOST}:${WEB_PORT}`, 'TO:', `${API_HOST}:${API_PORT}`);
    console.log('FINALIZED URL:', `${API_HOST}:${API_PORT}${requestUri}`);
    res.redirect(307, `${API_HOST}:${API_PORT}${requestUri}`);
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
