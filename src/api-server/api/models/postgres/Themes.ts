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

type ThemeAttributes = {
  id?: number;
  name: string;
  hidden: boolean;
  style: Record<string, unknown>;
};

@Table
class Themes extends Model<ThemeAttributes> {
  @AutoIncrement
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
  @Column(DataType.JSONB)
  style!: Record<string, unknown>;
}

export {
  Themes,
  ThemeAttributes,
};
