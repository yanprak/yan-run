import { Config, CTX } from './type';
import { Player } from './Player';
import { Box } from './Box';

type TimerId = ReturnType<typeof setTimeout> | undefined | null | number;

export class Game {
  state: Config = {
    gravity: 0.1,
    canJump: true,
    box: [],
    box_x: 800,
    score: 0,
    isRun: false,
    width: 800,
    height: 400,
  };

  timerId: TimerId = null;

  ctx: CTX;

  score: number = 0;

  private scoreView: HTMLElement | null = null;

  constructor() {
    const canvas = document.getElementById('canvas');
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    this.ctx = ctx;
    if (this.ctx) {
      // create Player
      const player = new Player(this.state, this.ctx);
      player.xSpeed = 5;
      this.state.player = player;

      // create Box
      for (let i = 0; i < 100; i++) {
        const box = new Box(this.state, this.ctx);
        this.state.box.push(box);
        this.state.box_x += Math.floor(Math.random() * 500) + 300;
      }
    }
    this.scoreView = document.getElementById('gameScore');
  }

  keyDown(k:number) {
    const key = +k;
    const player = this.state.player as Player;
    if (key === 38 && this.state.canJump) {
      player.ySpeed = -4;
    }
    // pause press key "space"
    if (key === 32) {
      if (this.state.isRun) {
        // clearTimeout(timerId);
        this.state.isRun = false;
      } else {
        this.state.isRun = true;
        // timerId = setInterval(update, 10);
      }
    }
  }

  update() {
    // console.log('-= START RENDER GAME =-');
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, 800, 400);

    // ground
    this.ctx.fillStyle = '#404040';
    this.ctx.fillRect(0, this.state.height - 50, this.state.width, 100);

    // player
    const player = this.state.player as Player;
    player.show();
    player.update();

    // box
    for (let i = 0; i < this.state.box.length; i++) {
      const box = this.state.box[i] as Box;
      box.show();
      const isBlow = box.update();
      if (isBlow) {
        this.stop();
        break;
      }
      box.state.x -= player.xSpeed;
    }
    this.score++;
    this.scoreView!.innerHTML = `$ = ${this.score}`;
  }

  public start() {
    this.timerId = setInterval(() => {
      this.update();
    }, 10);

    document.onkeydown = (event: KeyboardEvent) => {
      const { keyCode } = event;
      this.keyDown(keyCode);
    };
  }

  public stop() {
    if (typeof this.timerId === 'number') {
      clearTimeout(this.timerId);
    }
    document.onkeydown = null;
  }
}
