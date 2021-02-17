import { Nullable } from '../../types';

export type SignInOptions = {
  login: string,
  password: string,
};

export type RegisterOptions = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string,
};

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
