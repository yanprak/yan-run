import { Reducer } from 'redux';
import { User, UserActions } from './types';
import { SET_USER, SET_HERO } from './actions';
import { Nullable } from '../../types';

const reducer: Reducer<Nullable<User>, UserActions> = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action.payload;
      return user ? { ...user } : null;
    case SET_HERO:
      const { heroId } = action.payload;
      if (state) {
        return { ...state, heroId };
      }
      return null;
    default:
      return state;
  }
};

export default reducer;
