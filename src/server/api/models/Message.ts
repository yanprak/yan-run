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
  HasMany,
} from 'sequelize-typescript';
import Reaction from './Reaction';
import User from './User';
import Topic from './Topic';
import { Nullable } from '../../../client/types';

type MessageAttributes = {
  id: number;
  text: string;
  user_id: number;
  topic_id: number;
  parent_id: Nullable<number>;
  replies: Message[];
  reactions: Reaction[];
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
    field: 'id',
  })
  user_id!: number;

  @ForeignKey(() => Topic)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'id',
  })
  topic_id!: number;

  @BelongsTo(() => Message)
  @Column({
    type: DataType.INTEGER,
    field: 'id',
  })
  parent_id!: Nullable<number>;

  @HasMany(() => Message)
  @AllowNull(false)
  @Column(DataType.ARRAY)
  replies!: Message[];

  @BelongsTo(() => Reaction)
  @AllowNull(false)
  @Column(DataType.ARRAY)
  reactions!: Reaction[];

  @AllowNull(false)
  @Column(DataType.DATE)
  @CreatedAt
  created_at!: Date;
}

export default Message;
