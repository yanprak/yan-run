export type LeaderboardProps = {
  count: number;
};

export type LeaderboardRowProps = {
  rank: number,
  user: {
    avatar: string,
    login: string
  }
  score: number
};
