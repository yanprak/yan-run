import { ActionCreator } from 'redux';
import { UserActions, User } from './types';

export const SET_USER = 'SET_USER';
export const SET_HERO = 'SET_HERO';

export const setUser: ActionCreator<UserActions> = (user: User) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const setHero: ActionCreator<UserActions> = (heroId: number) => ({
  type: SET_HERO,
  payload: {
    heroId,
  },
});

export const removeUser: ActionCreator<UserActions> = () => ({
  type: SET_USER,
  payload: {
    user: null,
  },
});

// TODO: Additional actions can be:
// const yandexPraktikumActions = {
//   PENDING: 'PENDING',
//   SUCCESS: 'SUCCESS',
//   FAILED: 'FAILED',
// };
