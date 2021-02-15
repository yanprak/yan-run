import { PropsGameObject, Config, CTX } from './type';

export default class Player {
  ctx: CTX;

  public state: PropsGameObject = {
    x: 100,
    y: 100,
    w: 40,
    h: 80,
  };

  ySpeed = 3;

  xSpeed = 0;

  config: Config;

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
  }

  public show() {
    if (!this.ctx) return;
    this.ctx.fillStyle = '#5b8a20';
    const { x, y, w, h } = this.state;
    this.ctx.fillRect(x, y, w, h);
  }

  setState = (nextProps: PropsGameObject) => {
    Object.assign(this.state, nextProps);
  };

  public update() {
    this.state.y += this.ySpeed;
    this.ySpeed += this.config.gravity;

    if (this.state.y >= 350 - 80) {
      this.ySpeed = 0;
      this.config.canJump = true;
    } else {
      this.config.canJump = false;
    }
  }
}
