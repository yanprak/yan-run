import React from 'react';
import { Link } from 'react-router-dom';
import LeaderboardTable from '../../components/leaderboard-table';
import Button from '../../components/button/Button';

import './home.scss';

export default function Home() {
  return (
    <div className="home container container_is-column">
      <div className="home__intro">
        <h3 className="h3">Приветствую, друг!</h3>
        <p className="home__into-paragraph">
          Предлагаем тебе окунуться в замечательный мир цифровой легкой атлетики с элементами ACTION!
        </p>
        <Link to="/game">
          <Button size="large" styleType="primary">Играть</Button>
        </Link>
      </div>
      <div className="home__ranking">
        <h3>Чемпионы</h3>
        <LeaderboardTable limit={5} />
      </div>
    </div>
  );
}
