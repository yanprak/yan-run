import { HTMLAttributes } from 'react';
import { Nullable } from '../../types';
import { ReactionEnum } from '../../API/messages';
import { User } from '../../store/user/types';

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
  userId: number;
  user: UserEntry;
  reactions: ReactionsEntry;
  createdAt: string;
  updatedAt: string;
  currentUser: User;
  currentPage: number;
  totalMessages: number;
} & HTMLAttributes<HTMLDivElement>;
