import { combineReducers, createStore, applyMiddleware } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import thunk from 'redux-thunk';
import { Nullable } from '../types';

import { User } from './user/types';
import { LeaderboardState } from './leaderboard/types';

import userReducer from './user/reducer';
import leaderboardReducer from './leaderboard/reducer';

import isServer from '../utils/isServer';

export type ApplicationState = {
  user: Nullable<User>,
  router: RouterState,
  leaderboard: LeaderboardState,
};

function getReducer(history: History) {
  return combineReducers<ApplicationState>({
    user: userReducer,
    router: connectRouter(history),
    leaderboard: leaderboardReducer,
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
