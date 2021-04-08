import { FormHTMLAttributes } from 'react';

export type OwnProps = {
  placeholder: string;
  iconName: string;
  submitHandler: (message: string) => unknown;
  initialValue?: string;
} & FormHTMLAttributes<HTMLFormElement>;
