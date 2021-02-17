import React from 'react';
import Leaderboard from '../../components/leaderboard';

export default function LeaderboardPage() {
  return (
    <div className="container container_center container_center-items">
      <Leaderboard count={10} />
    </div>
  );
}
