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
  BelongsTo,
} from 'sequelize-typescript';
import User from './User';
import Topic from './Topic';
import { Nullable } from '../../../client/types';

type Reactions = {
  like: number[];
  dislike: number[];
  laugh: number[];
  hooray: number[];
  confused: number[];
  heart: number[];
  rocket: number[];
  eyes: number[];
};

type MessageAttributes = {
  id: number;
  text: string;
  userId: number;
  topicId: number;
  parentId: Nullable<number>;
  reactions: Reactions;
  createdAt: string;
};

@Table
class Message extends Model<MessageAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  text!: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @ForeignKey(() => Topic)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId!: number;

  @BelongsTo(() => Message)
  @Column(DataType.INTEGER)
  parentId!: Nullable<number>;

  @AllowNull(false)
  @Column(DataType.JSONB)
  reactions!: Reactions;

  @AllowNull(false)
  @Column(DataType.DATE)
  @CreatedAt
  createdAt!: Date;
}

export default Message;
