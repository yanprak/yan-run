import { FormHTMLAttributes, HTMLAttributes } from 'react';
import { UserInfo } from '../../hooks/useAuthApi/types';
import { Nullable } from '../../types';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export type UserDetailsFormProps = {
  user: UserInfo
} & FormProps;

export type AvatarProps = {
  image: Nullable<string>;
} & HTMLAttributes<HTMLDivElement>;
