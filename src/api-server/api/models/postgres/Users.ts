import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  Default,
  ForeignKey,
} from 'sequelize-typescript';
import { Nullable } from '../../../../client/types';
import { Themes } from './Themes';

type UserAttributes = {
  id?: number;
  first_name: string;
  second_name: string;
  display_name: Nullable<string>;
  login: string;
  email: string;
  phone: Nullable<string>;
  avatar: Nullable<string>;
  theme?: number;
};

@Table
class Users extends Model<UserAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'first_name',
  })
  first_name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'second_name',
  })
  second_name!: string;

  @Column({
    type: DataType.STRING,
    field: 'display_name',
  })
  display_name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  login!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  avatar!: string;

  @ForeignKey(() => Themes)
  @AllowNull(false)
  @Default(0)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
  })
  themeId!: number;
}

export {
  Users,
  UserAttributes,
};
