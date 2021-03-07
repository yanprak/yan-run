import React, { useEffect, memo, useRef } from 'react';
import Game from './Game';
import Button from '../button/Button';
import './game.scss';
import { toggleFullscreen } from '../../utils/fullscreen';

const GameComponent = () => {
  let game: Game;
  const refCanvas = useRef<HTMLCanvasElement>(null);

  const startGame = () => {
    const canvas = refCanvas.current;
    if (canvas) {
      game = new Game(canvas.getContext('2d'));
      game.start();
    }
  };

  const stopGame = () => {
    game.stop();
    window.console.log('Exit. Game over!');
  };

  const handleFullscreenClick = () => {
    const canvas = refCanvas.current;
    if (canvas) {
      toggleFullscreen(canvas);
    }
    startGame();
  };

  useEffect(() => stopGame, []);

  return (
    <div className="game">
      <div id="game-ui" className="game__intro padding_s-3">
        <Button onClick={startGame} size="large" className="margin_s-2" styleType="primary">Start game!</Button>
        <Button
          onClick={handleFullscreenClick}
          size="large"
          className="margin_s-2"
          styleType="primary"
        >
          Start in fullscreen!
        </Button>
      </div>
      <div id="game-score" className="h3 game__score">0</div>
      <canvas
        ref={refCanvas}
        id="canvas"
        width="800"
        height="400"
        style={{ border: '1px solid #d3d3d3', background: 'black' }}
      />
    </div>
  );
};

export default memo(GameComponent);
