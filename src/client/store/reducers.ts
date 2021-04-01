import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { ApplicationState } from './types';

import userReducer from './user/reducer';
import leaderboardReducer from './leaderboard/reducer';
import themeReducer from './theme/reducer';

const createRootReducer = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  user: userReducer,
  leaderboard: leaderboardReducer,
  theme: themeReducer,
});

export default createRootReducer;
