import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  Default,
} from 'sequelize-typescript';

type ThemeAttributes = {
  id?: number;
  name: string;
  hidden: boolean;
  style: string;
  // style: Record<string, unknown>;
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
  @Column(DataType.STRING)
  // style!: Record<string, unknown>;
  style!: string;
}

export {
  Themes,
  ThemeAttributes,
};
