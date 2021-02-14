import React, { memo } from 'react';
import Avatar from '../../components/avatar/Avatar';
import { LeaderboardRowProps } from './types';

function Row(props: LeaderboardRowProps) {
  const { rank, user, score } = props;
  return (
    <div className="leaderboard__row">
      <div className="leaderboard__user-rank">{rank}</div>
      <div className="leaderboard__user-info">
        <Avatar url={user.avatar} />
        <div>{user.name}</div>
      </div>
      <div className="leaderboard__user-score">{score}</div>
    </div>
  );
}

export default memo<LeaderboardRowProps>(Row);
