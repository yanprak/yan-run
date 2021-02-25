import { PropsGameObject, Config, CTX } from './type';

export default class Player {
  ctx: CTX;

  public state: PropsGameObject = {
    x: 100,
    y: 100,
    w: 40,
    h: 80,
  };

  ySpeed = 5;

  config: Config;

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
  }

  public show() {
    if (!this.ctx) return;
    // цвет и размеры будут переработаны после анимации персонажа и заключены в конфиг
    this.ctx.fillStyle = '#5b8a20';
    const { x, y, w, h } = this.state;
    this.ctx.fillRect(x, y, w, h);
  }

  public update() {
    this.state.y += this.ySpeed;
    this.ySpeed += this.config.gravity;
    const bg = this.config.background;
    if (this.state.y >= bg.y - this.state.h) {
      this.ySpeed = 0;
      this.config.canJump = true;
    } else {
      this.config.canJump = false;
    }
  }
}
