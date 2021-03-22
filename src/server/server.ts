import express, { Express } from 'express';
import path from 'path';
import router from './router';

const app: Express = express();

app
  .use(express.static(path.join(__dirname, '../dist')))
  .use(router);

// eslint-disable-next-line import/prefer-default-export
export { app };
