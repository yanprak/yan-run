import { combineReducers, createStore, Reducer, Store } from 'redux';

import { UserState } from './user/types';

import userReducer from './user/reducer';

// TODO: new states can be combined here, e.g. "... & OtherState", etc
export type ApplicationState = UserState;

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  user: userReducer,
});

export default function configureStore(initialState: ApplicationState): Store<ApplicationState> {
  return createStore(
    reducers,
    initialState,
  );
}
