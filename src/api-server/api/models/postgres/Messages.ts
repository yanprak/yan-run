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
import { Users } from './Users';
import { Topics } from './Topics';
import { Nullable } from '../../../../client/types';

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
  id?: number;
  text: string;
  userId: number;
  topicId: number;
  parentId: Nullable<number>;
  reactions: Reactions;
  createdAt?: string;
};

@Table
class Messages extends Model<MessageAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  text!: string;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @ForeignKey(() => Topics)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId!: number;

  @BelongsTo(() => Messages, 'parent_id')
  parentId!: Nullable<number>;

  // todo(Nail): remove column
  // @ForeignKey(() => Messages)
  // @Column({
  //   type: DataType.INTEGER,
  //   field: 'messages_id',
  // })
  // parentId!: Nullable<number>;

  @AllowNull(false)
  @Column(DataType.JSONB)
  reactions!: Reactions;

  @AllowNull(false)
  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  createdAt!: Date;
}

export {
  Messages,
  Reactions,
  MessageAttributes,
};
