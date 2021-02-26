import React, { memo } from 'react';
import Avatar from '../avatar/Avatar';
import { LeaderboardTableRowProps } from './types';

function Row(props: LeaderboardTableRowProps) {
  const { rank, user, score } = props;
  return (
    <div className="leaderboard-table__row">
      <div className="leaderboard-table__user-rank">{rank}</div>
      <div className="leaderboard-table__user-info padding_s-1">
        <Avatar url={user.avatar} />
        <div>{user.login}</div>
      </div>
      <div className="leaderboard-table__user-score">{score}</div>
    </div>
  );
}

export default memo<LeaderboardTableRowProps>(Row);
