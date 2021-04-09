import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import apiRouter from './router';
import sequelize from './api';
import dataGenerator from './utils/dataGenerator';

const server: Express = express();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const isOptions = req.method.toLowerCase() === 'options';

  if (isOptions) {
    res.status(204).send('');
  } else {
    const cookie = req.header('Cookie');
    if (cookie) {
      const parsedCookiesKeys = cookie.split(';').map(item => item.trim().split('=')[0]);
      const authorized = parsedCookiesKeys.includes('uuid') && parsedCookiesKeys.includes('authCookie');
      if (authorized) {
        next();
      } else {
        res.status(401).json({ message: 'Cookie is not valid' });
      }
    } else {
      res.status(401).json({ message: 'Cookie is not valid' });
    }
  }
};

server
  .disable('x-powered-by')
  .enable('trust proxy')
  .use(helmet())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      'https://local.ya-praktikum.tech:5000',
    ); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use(authMiddleware)
  .use('/api/v1', apiRouter);

// connect POSTGRES
sequelize.sync({ force: true })
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
