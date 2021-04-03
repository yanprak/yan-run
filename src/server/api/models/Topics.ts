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
import Users from './Users';

type TopicAttributes = {
  id: number;
  name: string;
  messagesCount: number;
  userId: number;
  createdAt: string;
};

@Table
class Topics extends Model<TopicAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'messages_count',
  })
  messagesCount!: number;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  @CreatedAt
  createdAt!: Date;
}

export default Topics;
