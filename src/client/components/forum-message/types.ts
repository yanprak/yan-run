import { HTMLAttributes } from 'react';

export type OwnProps = {
  message: string;
  createdAt: string;
  user: {
    username: string;
    avatar: string | undefined;
  }
} & HTMLAttributes<HTMLDivElement>;
