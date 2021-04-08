import express, { Express } from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack/client.config';
import router from './router/app';
import apiRouter from './router/api';
import sequelize from './api';
import dataGenerator from './utils/dataGenerator';

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
  .disable('x-powered-by')
  .enable('trust proxy')
  .use(express.static(path.join(__dirname, '../dist')))
  // .use(render)
  // .use(logger)
  // todo(anton.kagakin): do we actually need to parse application/x-www-form-urlencoded for this server?
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use('/api/v1', apiRouter)
  .use(router);

sequelize.sync()
  .then(() => {
    console.log('DB acces success');
    // demo data
    dataGenerator();
  })
  .catch(e => console.log(e));

// eslint-disable-next-line import/prefer-default-export
export { app };
