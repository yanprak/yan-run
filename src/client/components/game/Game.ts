import { Config, CTX, TimerId } from './type';
import Player from './Player';
import Box from './Box';

export default class Game {
  private readonly ctx: CTX;

  private readonly scoreView: HTMLElement | null = null;

  private readonly uiView: HTMLElement | null = null;

  private config: Config = {
    gravity: 0.1,
    canJump: true,
    box: [],
    box_x: 800,
    score: 0,
    isRun: false,
    width: 800,
    height: 400,
  };

  score = 0;

  timerId: TimerId = null;

  constructor() {
    const canvas = document.getElementById('canvas');
    this.ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (this.ctx) {
      // create Player
      const player = new Player(this.config, this.ctx);
      player.xSpeed = 5;
      this.config.player = player;

      // create Box
      for (let i = 0; i < 100; i++) {
        const box = new Box(this.config, this.ctx);
        this.config.box.push(box);
        this.config.box_x += Math.floor(Math.random() * 500) + 300;
      }
    }
    this.scoreView = document.getElementById('game-score');
    this.uiView = document.getElementById('game-ui');
  }

  private keyDown(k:number) {
    const key = +k;
    if (typeof this.timerId === 'number') {
      const player = this.config.player as Player;
      if (key === 38 && this.config.canJump) {
        player.ySpeed = -4;
      }
    }
    // pause press key "space"
    if (key === 32) {
      this.pause();
    }
  }

  private update() {
    // console.log('-= START RENDER GAME =-');
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, 800, 400);

    // create and show ground
    // если не анимировать то лучше убрать его в отдельный слой (другой canvas)
    this.ctx.fillStyle = '#404040';
    this.ctx.fillRect(0, this.config.height - 50, this.config.width, 100);

    // show player
    const player = this.config.player as Player;
    player.show();
    player.update();

    // show box
    for (let i = 0; i < this.config.box.length; i++) {
      const box = this.config.box[i] as Box;
      box.show();
      const isBlow = box.update();
      if (isBlow) {
        this.stop();
        break;
      }
      box.state.x -= player.xSpeed;
    }
    this.score++;
    if (this.scoreView) this.scoreView.innerHTML = `$ = ${this.score}`;
  }

  private timerStart() {
    this.timerId = setInterval(() => {
      this.update();
    }, 10);
  }

  public start() {
    if (!this.timerId) {
      this.timerStart();
      document.onkeydown = (event: KeyboardEvent) => {
        const { keyCode } = event;
        this.keyDown(keyCode);
      };
      if (this.uiView) this.uiView.classList.toggle('hidden');
    }
  }

  public stop(): number {
    if (typeof this.timerId === 'number') {
      clearTimeout(this.timerId);
      document.onkeydown = null;
      if (this.uiView) this.uiView.classList.toggle('hidden');
    }
    return this.score;
  }

  private pause() {
    if (typeof this.timerId === 'number') {
      clearTimeout(this.timerId);
      this.timerId = null;
    } else {
      this.timerStart();
    }
  }
}
