import { PropsGameObject, Config, CTX } from './type';

import heroSkin from './playerTextures';

export default class Player {
  ctx: CTX;
  img: HTMLImageElement = new Image();
  runningImage: HTMLImageElement = new Image();
  jumpingImage: HTMLImageElement = new Image();
  jumpingDoubleImage: HTMLImageElement = new Image();
  fallingImage: HTMLImageElement = new Image();

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

  constructor(config: Config, ctx: CTX, heroNumber = 0) {
    this.config = config;
    this.ctx = ctx;
    this.runningImage.src = heroSkin[heroNumber].runImageSprite;
    this.jumpingImage.src = heroSkin[heroNumber].jumpImageSprite;
    this.jumpingDoubleImage.src = heroSkin[heroNumber].jumpDoubleImageSprite;
    this.fallingImage.src = heroSkin[heroNumber].fallImageSprite;
  }

  public showRunning() {
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
    this.ctx.drawImage(this.runningImage, sX, 0, w, h, x, y, w, h);
  }

  public showDoubleJump() {
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
    this.ctx.drawImage(this.jumpingDoubleImage, sX, 0, w, h, x, y, w, h);
  }

  public showInAction(sprite: HTMLImageElement) {
    if (!this.ctx) return;
    const { x, y, w, h } = this.state;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.ctx.drawImage(sprite, 0, 0, 32, 32, x, y, w, h);
  }

  public update() {
    this.state.y = Math.round(this.state.y + this.ySpeed);
    this.ySpeed += this.config.gravity;
    const bg = this.config.background;
    const lowerBorder = Math.round(bg.y - this.state.h);
    if (this.state.y > lowerBorder) {
      this.state.y = lowerBorder + 1;
      this.ySpeed = 0;
      this.config.jumpsRemaining = 2;
      this.showRunning();
    } else {
      const ySpeed = Math.floor(this.ySpeed);
      if (ySpeed < 0 && this.config.jumpsRemaining < 1) {
        this.showDoubleJump();
      } else if (ySpeed <= 0) {
        this.showInAction(this.jumpingImage);
      } else if (ySpeed > 0) {
        this.showInAction(this.fallingImage);
      }
    }
  }
}
