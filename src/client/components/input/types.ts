import { ChangeEvent, InputHTMLAttributes } from 'react';

export type OwnProps = {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  errormessage?: string
  title?: string
} & InputHTMLAttributes<HTMLInputElement>;

export type Props = OwnProps;
