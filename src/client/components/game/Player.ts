import { PropsGameObject, Config, CTX } from './type';

import runImageSprite from './textures/sprite/frog/run.png';

export default class Player {
  ctx: CTX;
  img: HTMLImageElement = new Image();

  public state: PropsGameObject = {
    x: 100,
    y: 100,
    w: 48,
    h: 48,
  };

  ySpeed = 5;

  private config: Config;
  private maxWidthImage = 576;
  private tickCount = 0;
  private ticksPerFrame = 2;
  private frameIndex = 0;
  private frame = 12;

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = runImageSprite;
  }

  public show() {
    if (!this.ctx) return;
    const { x, y, w, h } = this.state;
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frame - 1) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
      }
    }
    const sX = (this.frameIndex * this.maxWidthImage) / this.frame;
    this.ctx.drawImage(this.img, sX, 0, w, h, x, y, w, h);
  }

  public update() {
    this.state.y = Math.round(this.state.y + this.ySpeed);
    this.ySpeed += this.config.gravity;
    const bg = this.config.background;
    const lowerBorder = Math.round(bg.y - this.state.h);
    if (this.state.y > lowerBorder) {
      this.state.y = lowerBorder + 1;
      this.ySpeed = 0;
      this.config.canJump = true;
    } else {
      this.config.canJump = false;
    }
  }
}
