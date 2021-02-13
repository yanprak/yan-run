import { HTMLAttributes } from 'react';

export type OwnProps = {
  current: number;
  total: number;
} & HTMLAttributes<HTMLDivElement>;
