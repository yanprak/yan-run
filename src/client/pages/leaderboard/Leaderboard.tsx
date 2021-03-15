import React from 'react';
import LeaderboardTable from '../../components/leaderboard-table';

export default function Leaderboard() {
  return (
    <div className="container container_center container_center-items">
      <LeaderboardTable limit={10} />
    </div>
  );
}
