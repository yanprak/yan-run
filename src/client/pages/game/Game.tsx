import React from 'react';
import GameComponent from '../../components/game';

export default function Game() {
  return (
    <div
      className="container container_center-items container_center margin_tb_s-3"
      style={{ height: 'auto' }}
    >
      <GameComponent />
    </div>
  );
}
