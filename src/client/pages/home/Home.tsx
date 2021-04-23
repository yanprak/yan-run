import React from 'react';
import { Link } from 'react-router-dom';
import LeaderboardTable from '../../components/leaderboard-table';
import Button from '../../components/button/Button';
import gameVideoPath from './game.mp4';

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
        <video autoPlay muted loop id="myVideo">
          <source src={gameVideoPath} type="video/mp4" />
        </video>
      </div>
      <div className="home__ranking">
        <h3 className="h3">Чемпионы</h3>
        <LeaderboardTable limit={5} />
      </div>
    </div>
  );
}
