import { Nullable } from '../../types';

export type LeaderboardTableProps = {
  cursor?: number,
  limit: number,
};

export type LeaderboardTableRowProps = {
  rank: number,
  user: {
    avatar: Nullable<string>,
    login: string
  }
  score: number
};
