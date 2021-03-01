import { Action } from 'redux';
import { Nullable } from '../../types';

export type UserState = {
  // TODO replace with user: Nullable<User>; ?
  user: User
};

export interface User {
  avatar: Nullable<string>,
  display_name: Nullable<string>,
  email: string,
  first_name: string,
  second_name: string,
  id: number,
  login: string,
  phone: string
}

export interface SetUserAction extends Action {
  type: 'SET_USER';
  payload: {
    user: Nullable<User>;
  };
}

export type UserActions = SetUserAction;
