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
import { Nullable } from '../../../../client/types';
import Themes from './Themes';

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
class Users extends Model<UserAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'first_name',
  })
  firstName!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'second_name',
  })
  secondName!: string;

  @Column({
    type: DataType.STRING,
    field: 'display_name',
  })
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

  @ForeignKey(() => Themes)
  @AllowNull(false)
  @Default(1)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
  })
  themeId!: number;
}

export default Users;
