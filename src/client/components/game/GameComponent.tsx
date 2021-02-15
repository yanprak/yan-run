import React, { useEffect, memo } from 'react';
import Game from './Game';
import Button from '../button/Button';
import './game.scss';

const GameComponent = () => {
  let game: Game;

  const startGame = () => {
    game = new Game();
    game.start();
    console.log('-= Game Start! =-');
  };

  const stopGame = () => {
    game.stop();
    console.log('Exit. Game over!');
  };

  useEffect(() => stopGame);

  return (
    <div className="game">
      <div id="game-ui" className="game__intro padding_s-3">
        <Button onClick={startGame} size="large" className="margin_s-2" styleType="primary">Start game!</Button>
      </div>
      <div id="game-score" className="h3 game__score">0</div>
      <canvas
        id="canvas"
        width="800"
        height="400"
        style={{ border: '1px solid #d3d3d3', background: 'black' }}
      />
    </div>
  );
};

export default memo(GameComponent);
