import { HTMLAttributes } from 'react';

export type OwnProps = {
  isSelected: boolean;
  text: number | string;
  path: string;
} & HTMLAttributes<HTMLDivElement>;
