import { FC, HTMLAttributes } from 'react';
import { Nullable } from '../../types';

export type OwnProps = {
  url?: Nullable<string>;
  size?: 'small' | 'medium' | 'large';
} & HTMLAttributes<HTMLDivElement>;

export type Props = FC<OwnProps>;
