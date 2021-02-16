import { TextareaHTMLAttributes } from 'react';

export type OwnProps = {
  resizable: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
