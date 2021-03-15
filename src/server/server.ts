import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import serverRenderMiddleware from './serverRenderMiddleware';

const app = express();

app
  .use(express.static(path.join(__dirname, '../dist')))
  .use(cookieParser());

app.get('*', serverRenderMiddleware);

// eslint-disable-next-line import/prefer-default-export
export { app };
