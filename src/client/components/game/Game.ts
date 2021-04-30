import { Config, CTX, GameResult } from './type';
import Player from './Player';
import Box from './Box';
import Coin from './Coin';
import Sound from './Sound';
import { Nullable } from '../../types';

import backgroundImage from './textures/background/background.png';
import bgSound from './audio/background.mp3';
import jumpSound from './audio/jump.mp3';
import hitSound from './audio/hit.mp3';
import clickSound from './audio/click.mp3';
import coinSound from './audio/coin.mp3';

export default class Game {
  private readonly ctx: CTX;

  private readonly scoreView: HTMLElement | null = null;

  private readonly uiView: HTMLElement | null = null;

  private config: Config = {
    gravity: 0.6,
    jumpsRemaining: 2,
    canDoubleJump: true,
    box: [],
    box_max: 42,
    box_speed: 6,
    box_x: 800,
    coin: [],
    coin_max: 100,
    coin_speed: 6,
    coin_x: 800,
    score: 0,
    isRun: false,
    width: 800,
    height: 400,
    background: {
      fillStyle: '#F2F3E0',
      x: 0,
      y: 350,
      width: 800,
      height: 50,
      speed: 2,
    },
  };

  bgImg: HTMLImageElement;

  backgroundSound: Sound;
  jumpSound: Sound;
  hitSound: Sound;
  clickSound: Sound;
  coinSound: Sound;

  score = 0;

  private idAnimate: Nullable<number> = null;

  private pause = false;

  updateScore: (score: number) => void;

  constructor(canvas: CanvasRenderingContext2D | null, updateScore: (score: number) => void, characterNumber = 0) {
    this.ctx = canvas;
    this.updateScore = updateScore;
    // create Player
    this.config.player = new Player(this.config, this.ctx, characterNumber);

    // create Box
    for (let i = 0; i < this.config.box_max; i++) {
      const box = new Box(this.config, this.ctx);
      this.config.box.push(box);
      this.config.box_x += Math.floor(Math.random() * 500) + 300;
    }

    for (let i = 0; i < this.config.coin_max; i++) {
      const coin = new Coin(this.config, this.ctx);
      this.config.coin.push(coin);
      this.config.coin_x += Math.floor(Math.random() * 500) + 100;
    }

    this.bgImg = new Image();
    this.bgImg.src = backgroundImage;

    this.scoreView = document.getElementById('game-score');
    this.uiView = document.getElementById('game-ui');

    this.backgroundSound = new Sound(bgSound);
    this.jumpSound = new Sound(jumpSound);
    this.hitSound = new Sound(hitSound);
    this.clickSound = new Sound(clickSound);
    this.coinSound = new Sound(coinSound);
  }

  private keyDown(k: number) {
    const key = +k;
    const player = this.config.player as Player;
    if ((key === 38 || key === 87) && (this.config.jumpsRemaining > 0)) {
      player.ySpeed = -10;
      this.config.jumpsRemaining -= 1;
      if (!this.pause) {
        this.jumpSound.stop();
        this.jumpSound.play();
      }
    }
    // pause press key "space"
    if (key === 32) {
      this.clickSound.play();
      this.handlePause();
    }
  }

  private updateBackground() {
    if (!this.ctx) return;
    const { background } = this.config;

    background.x += background.speed;

    /*
      TODO(anton.kagakin):
      1024 is the width of the background image
      consider to use more wisely mechanism to
      get the width of the image
     */

    if (background.x > 1024) {
      background.x = 0;
    }

    let sourceWidth;
    if (background.x < 1024 - 800) {
      sourceWidth = 800;
    } else {
      sourceWidth = 1024 - background.x;
    }

    this.ctx.drawImage(
      this.bgImg,
      background.x, 768, sourceWidth, 256,
      0, 144, sourceWidth, 256,
    );
    if (sourceWidth < 800) {
      this.ctx.drawImage(
        this.bgImg,
        0, 768, 800 - sourceWidth, 256,
        sourceWidth, 144, 800 - sourceWidth, 256,
      );
    }

    this.ctx.fillStyle = background.fillStyle;
    this.ctx.fillRect(0, 0, 800, 150);
  }

  private updatePlayer() {
    const player = this.config.player as Player;
    player.update();
  }

  private updateBox(): GameResult {
    let resultGame: GameResult = 'continued';
    const lastBox = this.config.box[this.config.box.length - 1] as Box;
    if (lastBox.state.x <= 0) {
      resultGame = 'win';
    } else {
      for (let i = 0; i < this.config.box.length; i++) {
        const box = this.config.box[i] as Box;
        box.show();
        const isCrash = box.update();
        if (isCrash) {
          resultGame = 'losing';
          break;
        }
        box.state.x -= this.config.box_speed;
      }
    }
    return resultGame;
  }

  private updateCoin() {
    for (let i = 0; i < this.config.coin.length; i++) {
      const coin = this.config.coin[i] as Coin;
      coin.show();
      const wasCollected = coin.update();
      if (wasCollected && !coin.wasCollected) {
        coin.collect();
        this.coinSound.stop();
        this.coinSound.play();
        this.score += 1000;
      }
      coin.state.x -= this.config.coin_speed;
    }
  }

  private update() {
    if (!this.ctx) return;
    if (this.pause) return;
    const { width, height } = this.config;
    this.ctx.clearRect(0, 0, width, height);

    // create and show ground
    this.updateBackground();

    // show player
    this.updatePlayer();

    // show box
    const gameResult: GameResult = this.updateBox();

    // show coin
    this.updateCoin();

    // collision
    switch (gameResult) {
      case 'losing':
        this.hitSound.play();
        this.stop();
        break;
      case 'win':
        this.stop(true);
        break;
      default:
        this.score++;
        if (this.scoreView) this.scoreView.innerHTML = `$ = ${this.score}`;
        this.startAnimate();
    }
  }

  public start() {
    document.onkeydown = (event: KeyboardEvent) => {
      const { keyCode } = event;
      this.keyDown(keyCode);
    };
    document.onclick = () => {
      this.keyDown(38);
    };
    if (this.uiView) this.uiView.classList.toggle('hidden');
    this.startAnimate();
    this.backgroundSound.play();
  }

  public stop(isWin?: boolean): number {
    this.updateScore(this.score);
    this.backgroundSound.stop();
    document.onkeydown = null;
    document.onclick = null;
    if (this.uiView) {
      this.uiView.classList.toggle('hidden');
    }
    if (this.scoreView && isWin) {
      this.scoreView.innerHTML = `Вы победили! $ = ${this.score}`;
    }
    if (this.idAnimate) {
      window.cancelAnimationFrame(this.idAnimate);
    }
    return this.score;
  }

  private startAnimate() {
    this.idAnimate = window.requestAnimationFrame(() => this.update());
  }

  private handlePause() {
    if (this.pause) {
      this.startAnimate();
      this.pause = false;
      this.backgroundSound.play();
    } else {
      this.pause = true;
      this.backgroundSound.pause();
    }
  }
}
