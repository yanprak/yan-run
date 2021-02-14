import React, { Component } from 'react';
import { Game } from './Game';
import Button from '../button/Button';

export default class GameComponent extends Component {
  game: Game | undefined = undefined;

  // componentDidMount() {
  //   GameComponent.idTimer = start();
  //   console.log(`Game Start! ${GameComponent.idTimer}`);
  // }

  // constructor(props) {
  //   super(props);
  // }

  componentWillUnmount() {
    this.stopGame();
  }

  startGame = () => {
    this.game = new Game();
    this.game.start();
    console.log('-= Game Start! =-');
  };

  stopGame = () => {
    if (this.game) {
      this.game.stop();
    }
    console.log('Exit. Game over!');
  };

  render() {
    return (
      <div>
        <div className="container padding_tb_s-2">
          <Button onClick={this.startGame} size="small" className="margin_s-2" styleType="secondary">Start</Button>
          <Button onClick={this.stopGame} size="small" className="margin_s-2" styleType="secondary">Stop</Button>
          <h3 id="gameScore" className="h3">0</h3>
        </div>
        <canvas
          id="canvas"
          width="800"
          height="400"
          style={{ border: '1px solid #d3d3d3', background: 'black' }}
        />
      </div>
    );
  }
}
