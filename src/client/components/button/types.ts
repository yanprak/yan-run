import {FC, ButtonHTMLAttributes} from 'react';

export type OwnProps = {
  size: 'small' | 'large';
  styleType: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = FC<OwnProps>;
