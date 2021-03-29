import { ActionCreator } from 'redux';

import { LeaderboardEntry } from '../../API/leaderboard';

import { FetchLeaderboardFailure, FetchLeaderboardRequest, FetchLeaderboardSuccess } from './types';

export const FETCH_LEADERBOARD_REQUEST = 'FETCH_LEADERBOARD_REQUEST';
export const FETCH_LEADERBOARD_SUCCESS = 'FETCH_LEADERBOARD_SUCCESS';
export const FETCH_LEADERBOARD_FAILURE = 'FETCH_LEADERBOARD_FAILURE';

export const leaderboardRequested: ActionCreator<FetchLeaderboardRequest> = () => ({
  type: FETCH_LEADERBOARD_REQUEST,
});

export const leaderboardLoaded: ActionCreator<FetchLeaderboardSuccess> = (leaderboard: LeaderboardEntry[]) => ({
  type: FETCH_LEADERBOARD_SUCCESS,
  payload: leaderboard,
});

export const leaderboardError: ActionCreator<FetchLeaderboardFailure> = () => ({
  type: FETCH_LEADERBOARD_FAILURE,
});
