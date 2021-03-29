import {
  Model,
  Table,
  Column,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
} from 'sequelize-typescript';

type ThemeAttributes = {
  id: number;
  style: string;
};

@Table
class Theme extends Model<ThemeAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.JSONB)
  style!: Record<string, unknown>; // object?
}

export default Theme;
