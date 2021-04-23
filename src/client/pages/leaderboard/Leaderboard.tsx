import React from 'react';
import LeaderboardTable from '../../components/leaderboard-table';
import './leaderboard-page.scss';

export default function Leaderboard() {
  return (
    <div className="page container container_center container_center-items">
      <div className="leaderboard-page__content">
        <LeaderboardTable limit={10} />
      </div>
    </div>
  );
}
