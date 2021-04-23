import React, { useEffect, memo, useRef } from 'react';
import { useSelector } from 'react-redux';

import Game from './Game';
import GameUI from './GameUI';
import { toggleFullscreen } from '../../utils/fullscreen';
import { useApiLeaderboard, useHero } from '../../hooks';
import { User, UserState } from '../../store/user/types';

import { RATING_FIELD_NAME } from '../../API/leaderboard';
import './game.scss';

const GameComponent = () => {
  let game: Game;
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const { updateLeaderboardData } = useApiLeaderboard();

  const { currentHero } = useHero();

  const user = useSelector<UserState, User>(
    state => state.user!,
  );

  const startGame = () => {
    const canvas = refCanvas.current;
    if (canvas) {
      game = new Game(
        canvas.getContext('2d'),
        score => {
          updateLeaderboardData({ yanrunUserId: user.id, [RATING_FIELD_NAME]: score });
        },
        currentHero,
      );
      game.start();
    }
  };

  const stopGame = () => {
    if (!game) {
      return;
    }
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
      <GameUI startGame={startGame} handleFullscreenClick={handleFullscreenClick} />
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
