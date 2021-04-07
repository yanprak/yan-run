import { HTMLAttributes } from 'react';
import { Nullable } from '../../types';

type UserEntry = {
  id: number;
  login: string;
  avatar: Nullable<string>;
};

type ReactionsEntry = {
  like: number[];
  dislike: number[];
  laugh: number[];
  hooray: number[];
  confused: number[];
  heart: number[];
  rocket: number[];
  eyes: number[];
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
