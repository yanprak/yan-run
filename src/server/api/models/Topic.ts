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
  messagesCount: number;
  userId: number;
  createdAt: string;
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
  messagesCount!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  @CreatedAt
  createdAt!: Date;
}

export default Topic;
