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
  name: string;
  style: Record<string, unknown>;
};

@Table
class Theme extends Model<ThemeAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.JSONB)
  style!: Record<string, unknown>;
}

export default Theme;
