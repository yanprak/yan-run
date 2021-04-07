import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import Messages from './models/postgres/Messages';
import Topics from './models/postgres/Topics';
import Users from './models/postgres/Users';
import Themes from './models/postgres/Themes';

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'yanrun',
  password: 'yp21',
  database: 'yanrun_base',
  dialect: 'postgres',
  models: [
    Users,
    Topics,
    Messages,
    Themes,
  ],
};

const sequelize = new Sequelize(sequelizeOptions);

export default sequelize;
