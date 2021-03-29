import { FormHTMLAttributes, HTMLAttributes } from 'react';
import { Nullable } from '../../types';

export type UserInfo = {
  avatar: Nullable<string>,
  display_name: Nullable<string>,
  email: string,
  first_name: string,
  second_name: string,
  id: number,
  login: string,
  phone: string
};

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export type UserDetailsFormProps = {
  user: UserInfo
} & FormProps;

export type AvatarProps = {
  image: Nullable<string>;
} & HTMLAttributes<HTMLDivElement>;
