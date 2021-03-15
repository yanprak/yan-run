import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import LeaderboardTableRow from './LeaderboardTableRow';
import { LeaderboardTableProps } from './types';
import { LeaderboardState } from '../../store/leaderboard/types';
import { ApplicationState } from '../../store';
import { useApiLeaderboard } from '../../hooks';

import './leaderboard-table.scss';

function LeaderboardTable({ cursor = 0, limit }: LeaderboardTableProps) {
  const { fetchLeaderboardData } = useApiLeaderboard();

  useEffect(() => {
    fetchLeaderboardData({ cursor, limit });
  }, [cursor, limit, fetchLeaderboardData]);

  const leaderboard = useSelector<ApplicationState, LeaderboardState>(state => state.leaderboard);

  const { data, error, loading } = leaderboard;

  let children;
  if (error) {
    children = 'Something went wrong';
  } else if (loading) {
    children = 'Loading...';
  } else {
    children = data.map((item, index) => (
      <LeaderboardTableRow
        key={item.id}
        rank={index + 1}
        score={item.score}
        user={{
          login: item.login,
          avatar: item.avatar,
        }}
      />
    ));
  }

  return (
    <div className="container container_center container_center-items">
      <div className="leaderboard-table">
        {children}
      </div>
    </div>
  );
}

export default memo<LeaderboardTableProps>(LeaderboardTable);
