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
import { Nullable } from '../../../client/types';

enum ReactionEnum {
  like = 'like',
  dislike = 'dislike',
  laugh = 'laugh',
  hooray = 'hooray',
  confused = 'confused',
  heart = 'heart',
  rocket = 'rocket',
  eyes = 'eyes',
}

type ReactionsEntry = {
  [key in ReactionEnum]: number[];
};

type MessageAttributes = {
  id?: number;
  text: string;
  userId: number;
  topicId: number;
  parentId: Nullable<number>;
  reactions: ReactionsEntry;
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

  @BelongsTo(() => Users, 'user_id')
  user!: Users;

  @ForeignKey(() => Topics)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId!: number;

  @BelongsTo(() => Messages, 'parent_id')
  parentId!: Nullable<number>;

  @AllowNull(false)
  @Column(DataType.JSONB)
  reactions!: ReactionsEntry;

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
  ReactionEnum,
  ReactionsEntry,
  MessageAttributes,
};
