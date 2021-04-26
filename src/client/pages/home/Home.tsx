import React from 'react';
import { Link } from 'react-router-dom';
import LeaderboardTable from '../../components/leaderboard-table';
import Button from '../../components/button/Button';
import gameVideoPath from './game.mp4';

import './home.scss';

export default function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="home__intro">
          <video autoPlay muted loop id="myVideo" className="home__demo">
            <source src={gameVideoPath} type="video/mp4" />
          </video>
          <div className="home__content">
            <h3 className="h3">Приветствую, друг!</h3>
            <p className="home__into-paragraph">
              Предлагаем тебе окунуться в замечательный мир цифровой легкой атлетики с элементами ACTION!
            </p>
            <Link to="/game">
              <Button size="large" styleType="primary">Играть</Button>
            </Link>
          </div>
        </div>
        <div className="container container_is-column container_center-items home__ranking ">
          <h3 className="h3">Чемпионы</h3>
          <LeaderboardTable limit={5} />
        </div>
      </div>
    </div>
  );
}
