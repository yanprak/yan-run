import { FC, HTMLAttributes } from 'react';

export type OwnProps = {
  url?: string;
  size?: 'small' | 'medium' | 'large';
} & HTMLAttributes<HTMLDivElement>;

export type Props = FC<OwnProps>;
