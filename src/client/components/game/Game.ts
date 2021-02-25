import { Config, CTX, GameResult } from './type';
import Player from './Player';
import Box from './Box';
import { Nullable } from '../../types';

export default class Game {
  private readonly ctx: CTX;

  private readonly scoreView: HTMLElement | null = null;

  private readonly uiView: HTMLElement | null = null;

  // структуру config необходимо переработать: разбить на ветки
  // в аналогии с background
  private config: Config = {
    gravity: 0.1,
    canJump: true,
    box: [],
    box_max: 4,
    box_speed: 6,
    box_x: 800,
    score: 0,
    isRun: false,
    width: 800,
    height: 400,
    background: {
      fillStyle: '#404040',
      x: 0,
      y: 350,
      width: 800,
      height: 100,
    },
  };

  score = 0;

  private idAnimate:Nullable<number> = null;

  private pause = false;

  constructor(canvas: CanvasRenderingContext2D | null) {
    this.ctx = canvas;
    // create Player
    this.config.player = new Player(this.config, this.ctx);

    // create Box
    for (let i = 0; i < this.config.box_max; i++) {
      const box = new Box(this.config, this.ctx);
      this.config.box.push(box);
      this.config.box_x += Math.floor(Math.random() * 500) + 300;
    }

    this.scoreView = document.getElementById('game-score');
    this.uiView = document.getElementById('game-ui');
  }

  private keyDown(k:number) {
    const key = +k;
    const player = this.config.player as Player;
    if (key === 38 && this.config.canJump) {
      player.ySpeed = -4;
    }
    // pause press key "space"
    if (key === 32) {
      this.handlePause();
    }
  }

  private updateBackground() {
    const { x, y, width, height, fillStyle } = this.config.background;
    if (!this.ctx) return;
    this.ctx.fillStyle = fillStyle;
    this.ctx.fillRect(x, y, width, height);
  }

  private updatePlayer() {
    const player = this.config.player as Player;
    player.show();
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

  private update() {
    if (!this.ctx) return;
    if (this.pause) return;
    const { width, height } = this.config;
    this.ctx.clearRect(0, 0, width, height);

    // create and show ground
    // если не анимировать то лучше убрать его в отдельный слой (другой canvas)
    this.updateBackground();

    // show player
    this.updatePlayer();

    // show box
    const gameResult:GameResult = this.updateBox();

    // collision
    switch (gameResult) {
      case 'losing':
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
    if (this.uiView) this.uiView.classList.toggle('hidden');
    this.startAnimate();
  }

  public stop(isWin?: boolean): number {
    document.onkeydown = null;
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
    } else this.pause = true;
  }
}
