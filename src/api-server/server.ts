import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import apiRouter from './router';
import sequelize from './api';
import dataGenerator from './utils/dataGenerator';

const server: Express = express();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const cookie = req.header('Cookie');
  if (cookie) {
    const parsedCookiesKeys = cookie.split(';').map(item => item.trim().split('=')[0]);
    const authorized = parsedCookiesKeys.includes('uuid') && parsedCookiesKeys.includes('authCookie');
    if (authorized) {
      next();
    }
  }
  res.status(401).json({ message: 'Cookie is not valid' });
};

server
  .disable('x-powered-by')
  .enable('trust proxy')
  // .use(render)
  // .use(logger)
  // todo(anton.kagakin): do we actually need to parse application/x-www-form-urlencoded for this server?
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(authMiddleware)
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
