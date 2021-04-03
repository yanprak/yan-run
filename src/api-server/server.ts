import express, { Express } from 'express';

import router from './router';

const server: Express = express();

server
  .disable('x-powered-by')
  .enable('trust proxy')
  // .use(render)
  // .use(logger)
  // todo(anton.kagakin): do we actually need to parse application/x-www-form-urlencoded for this server?
  .use(express.urlencoded({
    extended: true,
  }))
  .use(express.json())
  .use('/api/v1', router);

// eslint-disable-next-line import/prefer-default-export
export { server };
