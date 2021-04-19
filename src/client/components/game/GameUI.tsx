import React, { memo, useState } from 'react';
import Button from '../button/Button';
import { GameUiParams } from './type';

const chatacterClassName = () => {
  const
  return `game__character margin_s-2`
}

const GameUI = (params: GameUiParams) => {
  const { startGame, handleFullscreenClick } = params;
  const [state, setState] = useState<number>(0);
  return (
    <>
      <div id="game-ui" className="game__intro padding_s-3">
        <h1 className="h3">Выберите персонажа</h1>
        <div className="container container_center-items">
          <div
            onClick={() => setState(0)}
            className={}
          >
            Frog
          </div>
          <div
            onClick={() => setState(1)}
            className="game__character margin_s-2"
          >
            VM
          </div>
        </div>
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
