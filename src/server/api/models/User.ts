import {
  Model,
  Table,
  Column,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  Default,
} from 'sequelize-typescript';
import { Nullable } from '../../../client/types';
// import { UserInfo } from "../../../client/pages/profile/types";

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
  // TS2564: Property 'first_name' has no initializer and is not definitely assigned in the constructor.

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

  @AllowNull(false)
  @Column(DataType.INTEGER)
  @Default(1)
  theme!: string;
}

export default User;
