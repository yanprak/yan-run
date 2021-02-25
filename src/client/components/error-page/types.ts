import { HTMLAttributes } from 'react';

export type OwnProps = {
  code: number;
  description: string;
} & HTMLAttributes<HTMLDivElement>;
