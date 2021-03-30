import express, { Express } from 'express';

import router from './router';

const PORT = 3300;
const server: Express = express();

server
  .disable('x-powered-by')
  .enable('trust proxy')
  // .use(render)
  // .use(logger)
  .use('/api/v1', router);

server.listen(PORT, () => {
  global.console.info(`Listen on port ${PORT}`);
});
