import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import './db';
import apiRouter from './router';
import { authMiddleware } from './middlewares';

const server: Express = express();

server
  .enable('trust proxy')
  .use(helmet())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors({ origin: true, credentials: true }))
  .use(authMiddleware)
  .use('/api/v1', apiRouter);

// eslint-disable-next-line import/prefer-default-export
export { server };
