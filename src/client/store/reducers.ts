import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { ApplicationState } from './types';

import userReducer from './user/reducer';
import leaderboardReducer from './leaderboard/reducer';
import themeReducer from './theme/reducer';
import topicsReducer from './forum/reducer';
import messagesReducer from './messages/reducer';
import selectedTopicReducer from './topic/reducer';

const createRootReducer = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  user: userReducer,
  leaderboard: leaderboardReducer,
  topics: topicsReducer,
  theme: themeReducer,
  messages: messagesReducer,
  selectedTopic: selectedTopicReducer,
});

export default createRootReducer;
