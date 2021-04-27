import React, { useEffect, memo, useRef } from 'react';
import { useSelector } from 'react-redux';

import Game from './Game';
import GameUI from './GameUI';
import { useApiLeaderboard, useFullscreen, useHero } from '../../hooks';
import { User, UserState } from '../../store/user/types';

import { RATING_FIELD_NAME } from '../../API/leaderboard';
import isServer from '../../utils/isServer';
import './game.scss';

const GameComponentServer = () => null;

const GameComponent = () => {
  let game: Game;
  const refGameContainer = useRef<HTMLDivElement>(null);
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const { updateLeaderboardData } = useApiLeaderboard();
  const [isFullscreen, setFullscreen] = useFullscreen();

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
    const gameContainer = refGameContainer.current;
    if (gameContainer) {
      setFullscreen(gameContainer);
    }
  };

  useEffect(() => stopGame, []);

  const width = isFullscreen ? document.body.clientWidth : '800';
  const canvasMultiplier = Number(width) / 800;
  const canvasStyleProps = {
    border: '1px solid #d3d3d3',
    background: 'black',
    transform: isFullscreen ? `translate(-50%, -50%) scale(${canvasMultiplier})` : 'none',
  };

  return (
    <div
      className="game"
      ref={refGameContainer}
    >
      <GameUI
        startGame={startGame}
        handleFullscreenClick={handleFullscreenClick}
        isFullscreen={isFullscreen}
      />
      <canvas
        ref={refCanvas}
        id="canvas"
        className={`game__canvas ${isFullscreen ? 'game__canvas_fullscreen' : ''}`}
        width="800"
        height="400"
        style={canvasStyleProps}
      />
    </div>
  );
};

const component = isServer ? GameComponentServer : memo(GameComponent);

export default component;
