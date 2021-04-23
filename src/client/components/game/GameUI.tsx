import React, { memo, useCallback } from 'react';
import Button from '../button/Button';
import { GameUiParams } from './type';
import Heroes from './Heroes';
import { useAudio } from '../../hooks';
import clickSound from './audio/click.mp3';

const GameUI = ({ isFullscreen, startGame, handleFullscreenClick }: GameUiParams) => {
  const [, toggleSound] = useAudio(clickSound);

  const handleStartGameClick = useCallback(() => {
    toggleSound();
    startGame();
  }, [startGame, toggleSound]);
  const handleStartFullscreenClick = useCallback(() => {
    toggleSound();
    handleFullscreenClick();
  }, [handleFullscreenClick, toggleSound]);

  return (
    <>
      <div id="game-ui" className={`game__intro padding_s-3 ${isFullscreen ? 'game__intro_fullscreen' : ''}`}>
        <h1 className="h3">Выбери героя:</h1>
        <Heroes />
        <Button
          onClick={handleStartGameClick}
          size="large"
          className="margin_s-2"
          styleType="primary"
        >
          Start game!
        </Button>
        <Button
          onClick={handleStartFullscreenClick}
          size="large"
          className="margin_s-2"
          styleType="primary"
        >
          {`${isFullscreen ? 'Disable' : 'Enable'} fullscreen`}
        </Button>
      </div>
      <div id="game-score" className="h3 game__score">0</div>
    </>
  );
};

export default memo(GameUI);
