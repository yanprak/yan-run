import { createSelector } from 'reselect';
import { ApplicationState } from '../index';
import { User } from './types';

// todo: this is a template/example to apply in the project
const getUser = (state: ApplicationState) => state.user;

const selectUser = createSelector(
  getUser,
  (user: User) => user,
);

// eslint-disable-next-line import/prefer-default-export
export { selectUser };
