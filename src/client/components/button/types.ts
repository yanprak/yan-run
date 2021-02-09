import { ButtonHTMLAttributes } from 'react';

export type OwnProps = {
  size: 'small' | 'large';
  styleType: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;
