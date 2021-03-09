import { combineReducers, createStore, Reducer, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UserState } from './user/types';

import userReducer from './user/reducer';

/*
  New states can be combined here, e.g. "... & OtherState", etc
*/
export type ApplicationState = UserState;

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  user: userReducer,
});

/*
  Initial state can be 'undefined' in case the user visits for the first time (there is no localStorage record yet).
  Second argument (initialState) of 'createStore' can be undefined, [], {} & fn.
*/
export default function configureStore(initialState: ApplicationState | undefined): Store<ApplicationState> {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk),
  );
}
