import { RouterState } from 'connected-react-router';
import { Nullable } from '../types';
import { User } from './user/types';
import { LeaderboardState } from './leaderboard/types';
import { ThemeState } from './theme/types';
import { TopicsState } from './forum/types';

export type ApplicationState = {
  user: Nullable<User>,
  router: RouterState,
  leaderboard: LeaderboardState,
  topics: TopicsState
  theme: ThemeState
};
