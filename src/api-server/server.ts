import express, { Express } from 'express';
import mongoose from 'mongoose';
import apiRouter from './router';
import sequelize from './api';
import dataGenerator from './utils/dataGenerator';

const server: Express = express();

server
  .disable('x-powered-by')
  .enable('trust proxy')
  // .use(render)
  // .use(logger)
  // todo(anton.kagakin): do we actually need to parse application/x-www-form-urlencoded for this server?
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use('/api/v1', apiRouter);

// connect POSTGRES
sequelize.sync()
  .then(() => {
    console.log('[PostgreSQL] Connection established');
    // todo(Nail): Delete "dataGenerator" before releasing the product!
    dataGenerator();
  })
  .catch(e => console.log(e));

// connect MONGO
if (process.env.MONGO_URI) {
  const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  };
  mongoose.connect(process.env.MONGO_URI, connectionOptions)
    .then(() => console.log('[MongoDB] Connection established'))
    .catch(error => {
      console.error('[MongoDB] Could not establish connection', error);
      process.exit(1);
    });
} else {
  console.error('[MongoDB] Could not establish connection: no URI provided');
}

// eslint-disable-next-line import/prefer-default-export
export { server };
