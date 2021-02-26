export type LeaderboardTableProps = {
  count: number;
};

export type LeaderboardTableRowProps = {
  rank: number,
  user: {
    avatar: string,
    login: string
  }
  score: number
};
