import { HTMLAttributes } from 'react';

export type OwnProps = {
  uid: number,
  title: string;
  messagesCounter: number;
} & HTMLAttributes<HTMLDivElement>;
