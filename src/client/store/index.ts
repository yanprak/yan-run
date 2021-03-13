import { combineReducers, createStore, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import thunk from 'redux-thunk';
import { UserState } from './user/types';
import userReducer from './user/reducer';
import isServer from '../utils/isServer';
import { State } from './type';

/*
  New states can be combined here, e.g. "... & OtherState", etc
*/
export type ApplicationState = UserState | State;

function getReducer(history: History) {
  return combineReducers<ApplicationState>({
    user: userReducer,
    router: connectRouter(history),
  });
}

/*
  Initial state can be 'undefined' in case the user visits for the first time (there is no localStorage record yet).
  Second argument (initialState) of 'createStore' can be undefined, [], {} & fn.
*/
export default function configureStore(initialState: ApplicationState | undefined, url = '/') {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory();
  const store = createStore(
    getReducer(history),
    initialState,
    applyMiddleware(thunk),
  );

  return { store, history };
}
