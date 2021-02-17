import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from '../../components/leaderboard';
import Button from '../../components/button/Button';

import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="home__intro">
        <h3>Приветствую друг!</h3>
        <br />
        <p className="home__into-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, aperiam asperiores aut, beatae
          commodi culpa cum eaque eius explicabo facere libero maiores maxime nesciunt nobis sed tempore ut vitae!
        </p>
        <Link to="/game">
          <Button size="large" styleType="primary">Играть</Button>
        </Link>
      </div>
      <div className="home__ranking">
        <h3>Чемпионы</h3>
        <Leaderboard count={5} />
      </div>
    </div>
  );
}
