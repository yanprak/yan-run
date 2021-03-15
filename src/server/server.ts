import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import serverRenderMiddleware from './serverRenderMiddleware';
import serverCSRMiddleware from './serverCSRMiddleware';

const IS_SSR = process.env.SR === 'server';

const middleware = IS_SSR ? serverRenderMiddleware : serverCSRMiddleware;

const app = express();

app
  .use(express.static(path.join(__dirname, '../dist')))
  .use(cookieParser());

app.get('/*', middleware);

// eslint-disable-next-line import/prefer-default-export
export { app };
