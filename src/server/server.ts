import express from 'express';
import path from 'path';
import serverRenderMiddleware from './serverRenderMiddleware';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', serverRenderMiddleware);

// eslint-disable-next-line import/prefer-default-export
export { app };
