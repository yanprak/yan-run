import { HTMLAttributes } from 'react';

export type OwnProps = {
  current: number;
  total: number;
  path: string;
} & HTMLAttributes<HTMLDivElement>;
