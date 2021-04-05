import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

// TODO (ilya): Update options with real ones
const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'dbname',

  dialect: 'postgres',
  models: ['/models'],
};

const sequelize = new Sequelize(sequelizeOptions);

export default sequelize;
