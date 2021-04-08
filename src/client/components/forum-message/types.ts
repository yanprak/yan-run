import { HTMLAttributes } from 'react';
import { Nullable } from '../../types';
import { ReactionEnum } from '../reaction/types';

type UserEntry = {
  id: number;
  login: string;
  avatar: Nullable<string>;
};

type ReactionsEntry = {
  [key in ReactionEnum]: number[];
};

export type OwnProps = {
  uid: number;
  text: string;
  topicId: number;
  parentId: Nullable<number>;
  user: UserEntry;
  reactions: ReactionsEntry;
  createdAt: string;
} & HTMLAttributes<HTMLDivElement>;
