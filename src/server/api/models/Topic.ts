import {
  Model,
  Table,
  Column,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import User from './User';

type TopicAttributes = {
  id: number;
  name: string;
  messages_count: number;
  user_id: number;
  created_at: string;
};

@Table
class Topic extends Model<TopicAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  messages_count!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'id',
  })
  user_id!: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  @CreatedAt
  created_at!: Date;
}

export default Topic;
