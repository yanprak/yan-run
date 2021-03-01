/* eslint-disable import/prefer-default-export */
import { ActionCreator } from 'redux';
import {
  SetUserAction,
  User,
} from './types';

export const SET_USER = 'SET_USER';

export const setUser: ActionCreator<SetUserAction> = (user: User) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const removeUser: ActionCreator<SetUserAction> = () => ({
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
