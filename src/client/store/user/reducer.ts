import { Reducer } from 'redux';
import { SetUserAction, User, UserActions } from './types';
import { SET_USER } from './actions';
import initialState from './initialState';

const reducer: Reducer<User> = (state: User = initialState, action) => {
  switch ((action as UserActions).type) {
    case SET_USER:
      const userAction = action as SetUserAction;
      return { ...userAction.payload.user };
    default:
      return state;
  }
};

export default reducer;
