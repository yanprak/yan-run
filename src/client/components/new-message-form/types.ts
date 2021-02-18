import { FormHTMLAttributes } from 'react';

export type OwnProps = {
  placeholder: string;
} & FormHTMLAttributes<HTMLFormElement>;
