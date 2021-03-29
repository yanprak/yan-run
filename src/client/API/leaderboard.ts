import API from './index';
import { Nullable } from '../types';

export const RATING_FIELD_NAME = 'yanrunScore';

export type LeaderboardFetchRequest = {
  cursor: number,
  limit: number,
};

export type LeaderboardEntry = {
  id: number,
  login: string,
  avatar: Nullable<string>,
  score: number,
};

export type LeaderboardEntryRequest = {
  yanrunUserId: number,
  [RATING_FIELD_NAME]: number,
};

export type LeaderboardResponseData = {
  data: {
    yanrunUserId: number,
    [RATING_FIELD_NAME]: number,
  }
};

const fetchLeaderboardData = (
  { cursor = 0, limit = 10 }: LeaderboardFetchRequest,
) => API.post<LeaderboardResponseData[]>('leaderboard/all', JSON.stringify({
  cursor,
  limit,
  ratingFieldName: RATING_FIELD_NAME,
}));

const updateLeaderboardData = (
  data: LeaderboardEntryRequest,
) => API.post<string>('leaderboard', JSON.stringify({
  data,
  ratingFieldName: RATING_FIELD_NAME,
}));

export { fetchLeaderboardData, updateLeaderboardData };
