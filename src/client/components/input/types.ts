import { InputHTMLAttributes } from 'react';

export type Indexed = {
  [key in string]: string
};

export type InputProps = {
  name: string,
  error?: Indexed
  title?: string,
} & InputHTMLAttributes<HTMLInputElement>;

export type Props = InputProps;
