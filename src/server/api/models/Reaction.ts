import {
  Model,
  Table,
  Column,
  DataType,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import User from './User';

type ReactionAttributes = {
  id: number;
  name: string;
  user_id: number;
};

enum Reactions {
  like,
  dislike,
  laugh,
  hooray,
  confused,
  heart,
  rocket,
  eyes,
}

@Table
class Reaction extends Model<ReactionAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: Reactions;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'id',
  })
  user_id!: number;
}

export default Reaction;
