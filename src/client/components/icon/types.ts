import { HTMLAttributes } from 'react';

export type OwnProps = {
  name: string;
  size?: number;
} & HTMLAttributes<HTMLDivElement>;
