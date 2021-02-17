import { FormHTMLAttributes, HTMLAttributes } from 'react';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export type AvatarProps = {
  image: string;
} & HTMLAttributes<HTMLDivElement>;
