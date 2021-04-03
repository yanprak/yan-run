import express, { Express } from 'express';

import router from './router';

const server: Express = express();

server
  .disable('x-powered-by')
  .enable('trust proxy')
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use('/api/v1', router);

// eslint-disable-next-line import/prefer-default-export
export { server };
