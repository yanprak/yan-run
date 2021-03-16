import { RouterState } from 'connected-react-router';
import { Nullable } from '../types';
import { User } from './user/types';
import { LeaderboardState } from './leaderboard/types';

export type ApplicationState = {
  user: Nullable<User>,
  router: RouterState,
  leaderboard: LeaderboardState,
};
