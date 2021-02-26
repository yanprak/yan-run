/* eslint-disable import/prefer-default-export */
import { ActionCreator } from 'redux';
import {
  SetUserAction,
  User,
} from './types';

export const setUser: ActionCreator<SetUserAction> = (user: User) => ({
  type: 'SET_USER',
  payload: {
    user,
  },
});

// TODO: Additional actions can be:
// const yandexPraktikumActions = {
//   PENDING: 'PENDING',
//   SUCCESS: 'SUCCESS',
//   FAILED: 'FAILED',
// };
