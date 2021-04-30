import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  Default,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Nullable } from '../../../client/types';
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
  themeId?: number,
};

@Table
class Users extends Model<UserAttributes> {
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

  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  avatar!: string;

  @ForeignKey(() => Themes)
  @AllowNull(false)
  @Default(1)
  @Column(DataType.INTEGER)
  themeId!: number;

  @BelongsTo(() => Themes)
  theme!: Themes;
}

export {
  Users,
  UserAttributes,
};
