import React, { memo } from 'react';
import Button from '../button/Button';
import { GameUiParams } from './type';
import Heroes from './Heroes';

const GameUI = (params: GameUiParams) => {
  const { startGame, handleFullscreenClick } = params;
  return (
    <>
      <div id="game-ui" className="game__intro padding_s-3">
        <h1 className="h3">Выбери героя:</h1>
        <Heroes />
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
    </>
  );
};

export default memo(GameUI);
