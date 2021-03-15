import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { LeaderboardEntry } from '../../API/leaderboard';

export interface FetchLeaderboardRequest extends Action {
  type: 'FETCH_LEADERBOARD_REQUEST'
}

export interface FetchLeaderboardSuccess extends Action {
  type: 'FETCH_LEADERBOARD_SUCCESS',
  payload: LeaderboardEntry[]
}

export interface FetchLeaderboardFailure extends Action {
  type: 'FETCH_LEADERBOARD_FAILURE'
}

export type FetchLeaderboard = ThunkAction<void, LeaderboardState, unknown, Action<string>>;

export type LeaderboardActions = FetchLeaderboardRequest | FetchLeaderboardSuccess | FetchLeaderboardFailure;

export interface LeaderboardState {
  data: LeaderboardEntry[]
  loading: boolean,
  error: boolean
}
