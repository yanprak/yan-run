import { FormHTMLAttributes } from 'react';
import { Nullable } from '../../types';

type UserEntry = {
  id: number;
  login: string;
  avatar: Nullable<string>;
};

export type OwnProps = {
  placeholder: string;
  topicId: number;
  user: UserEntry;
} & FormHTMLAttributes<HTMLFormElement>;
