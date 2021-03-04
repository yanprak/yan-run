import { Reducer } from 'redux';
import { User, UserActions } from './types';
import { SET_USER } from './actions';
import { Nullable } from '../../types';

const reducer: Reducer<Nullable<User>, UserActions> = (state = null, action) => {
  // TODO(anton.kagakin): rework to 2 different actions
  // TODO(anton.kagakin): probably should called as userSignIn / userSignOut respectively
  // TODO(anton.kagakin): consider things about profile cause it also SET_USER action now
  switch (action.type) {
    case SET_USER:
      const { user } = action.payload;
      return user ? { ...user } : null;
    default:
      return state;
  }
};

export default reducer;
