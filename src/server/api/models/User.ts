import {
  Model,
  Table,
  Column,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import { Nullable } from '../../../client/types';
import Theme from './Theme';

type UserAttributes = {
  id: number;
  firstName: string;
  secondName: string;
  displayName: Nullable<string>;
  login: string;
  email: string;
  phone: string;
  avatar: Nullable<string>;
  theme: number;
};

@Table
class User extends Model<UserAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  secondN!: string;

  @Column(DataType.STRING)
  displayName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  login!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  avatar!: string;

  @ForeignKey(() => Theme)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  @Default(1)
  theme!: number;
}

export default User;
