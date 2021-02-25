import { HTMLAttributes } from 'react';

export type OwnProps = {
  title: string;
  messagesCounter: number;
} & HTMLAttributes<HTMLDivElement>;
