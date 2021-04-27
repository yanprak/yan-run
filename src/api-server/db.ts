import mongoose from 'mongoose';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { Users } from './models/postgres/Users';
import { Topics } from './models/postgres/Topics';
import { Messages } from './models/postgres/Messages';
import { Themes } from './models/postgres/Themes';
import dataGenerator from './utils/dataGenerator';

const {
  POSTGRES_HOST = '',
  POSTGRES_PORT = 5432,
  POSTGRES_USER = '',
  POSTGRES_PASSWORD = '',
  POSTGRES_DB = '',

  MONGO_HOST = '',
  MONGO_PORT = 27017,
  MONGO_USER = '',
  MONGO_PASS = '',
  MONGO_DB = '',

  NODE_ENV = 'development',
} = process.env;

const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
  models: [
    Users,
    Topics,
    Messages,
    Themes,
  ],
};

const IS_DEV = NODE_ENV === 'development';

// connect POSTGRES
const sequelize = new Sequelize(sequelizeOptions);
sequelize.sync({ force: IS_DEV })
  .then(() => {
    console.log('[PostgreSQL] Connection established');

    return IS_DEV ? dataGenerator() : Promise.resolve();
  })
  .catch(e => console.log(e));

// connect MONGO
const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

mongoose.connect(mongoURI, connectionOptions)
  .then(() => global.console.log('[MongoDB] Connection established'))
  .catch(error => {
    global.console.error('[MongoDB] Could not establish connection', error);
    process.exit(1);
  });
