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
  first_name: string;
  second_name: string;
  display_name: Nullable<string>;
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
  first_name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  second_name!: string;

  @Column(DataType.STRING)
  display_name!: string;

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
  @Column({
    type: DataType.INTEGER,
    field: 'id',
  })
  @Default(1)
  theme!: number;
}

export default User;
