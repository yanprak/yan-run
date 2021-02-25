import { PropsGameObject, Config, CTX } from './type';

import runImageSprite from './textures/sprite/frog/run.png';

export default class Player {
  ctx: CTX;
  img: HTMLImageElement = new Image();

  public state: PropsGameObject = {
    x: 100,
    y: 100,
    w: 32,
    h: 32,
  };

  ySpeed = 5;

  private config: Config;
  private maxWidthImage = 384;
  private stepX = 0;
  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = runImageSprite;
  }

  public show() {
    if (!this.ctx) return;
    const { x, y, w, h } = this.state;
    if (this.stepX < this.maxWidthImage) {
      this.stepX += 32;
    } else {
      this.stepX = 0;
    }
    this.ctx.drawImage(this.img, this.stepX, 0, w, h, x, y, w, h);
  }

  public update() {
    this.state.y = Math.round(this.state.y + this.ySpeed);
    this.ySpeed += this.config.gravity;
    const bg = this.config.background;
    const bb = Math.round(bg.y - this.state.h);
    if (this.state.y > bb) {
      this.ySpeed = 0;
      this.config.canJump = true;
    } else {
      this.config.canJump = false;
    }
  }
}
