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
  user_id: number;
  topic_id: number;
  parent_id: Nullable<number>;
  reactions: Reactions;
  created_at: string;
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
  user_id!: number;

  @ForeignKey(() => Topic)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topic_id!: number;

  @BelongsTo(() => Message)
  @Column({
    type: DataType.INTEGER,
    field: 'parent_id',
  })
  parent_id!: Nullable<number>;

  @AllowNull(false)
  @Column(DataType.JSONB)
  reactions!: Reactions;

  @AllowNull(false)
  @Column(DataType.DATE)
  @CreatedAt
  created_at!: Date;
}

export default Message;
