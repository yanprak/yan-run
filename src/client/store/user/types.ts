import { Action } from 'redux';
import { AxiosResponse } from 'axios';
import { Nullable } from '../../types';

export type HandlerSign = <T>(data: T) => Promise<AxiosResponse>;

export type UserState = {
  user: Nullable<User>
};

export interface User {
  avatar: Nullable<string>,
  display_name: Nullable<string>,
  email: string,
  first_name: string,
  second_name: string,
  id: number,
  login: string,
  phone: string,
  themeId: number,
  heroId?: number
}

export interface SetUserAction extends Action {
  type: 'SET_USER';
  payload: {
    user: Nullable<User>;
  };
}

export interface SetHero extends Action {
  type: 'SET_HERO';
  payload: {
    heroId: number;
  };
}

export type UserActions = SetUserAction | SetHero;
