import { HTMLAttributes } from 'react';

export type OwnProps = {
  message: string;
  createdAt: string;
  user: {
    login: string;
    avatar?: string;
  }
} & HTMLAttributes<HTMLDivElement>;
