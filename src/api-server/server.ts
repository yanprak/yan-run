import express, { Express, Request, Response, NextFunction } from 'express';
// import mongoose from 'mongoose';
import 'dotenv/config';
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
  .use(helmet())
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
    // todo(Nail): Edit "dataGenerator" before releasing the product!
    dataGenerator();
  })
  .catch(e => console.log(e));

// connect MONGO
// const {
//   MONGO_HOST = '',
//   MONGO_PORT = 27017,
//   MONGO_USER = '',
//   MONGO_PASS = '',
//   MONGO_DB = '',
// } = process.env;
//
// const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// const connectionOptions = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// };
//
// mongoose.connect(mongoURI, connectionOptions)
//   .then(() => global.console.log('[MongoDB] Connection established'))
//   .catch(error => {
//     global.console.error('[MongoDB] Could not establish connection', error);
//     process.exit(1);
//   });

// eslint-disable-next-line import/prefer-default-export
export { server };
