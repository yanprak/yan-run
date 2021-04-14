import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  Default,
  HasMany,
} from 'sequelize-typescript';

import { UserAttributes, Users } from './Users';

type ThemeAttributes = {
  id?: number;
  name: string;
  hidden: boolean;
  style: string;
};

@Table
class Themes extends Model<ThemeAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  hidden!: boolean;

  @AllowNull(false)
  @Column(DataType.TEXT)
  style!: string;

  @HasMany(() => Users)
  users: UserAttributes[] | undefined;
}

export {
  Themes,
  ThemeAttributes,
};
