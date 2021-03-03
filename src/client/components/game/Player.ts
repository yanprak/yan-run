import { PropsGameObject, Config, CTX } from './type';

import runImageSprite from './textures/sprite/frog/run.png';
import jumpImageSprite from './textures/sprite/frog/jump.png';
import fallImageSprite from './textures/sprite/frog/fall.png';

export default class Player {
  ctx: CTX;
  img: HTMLImageElement = new Image();
  runningImage: HTMLImageElement = new Image();
  jumpingImage: HTMLImageElement = new Image();
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

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;

    this.runningImage = new Image();
    this.runningImage.src = runImageSprite;

    this.jumpingImage = new Image();
    this.jumpingImage.src = jumpImageSprite;

    this.fallingImage = new Image();
    this.fallingImage.src = fallImageSprite;
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

  public showInAction(sprite: HTMLImageElement) {
    if (!this.ctx) return;
    const { x, y, w, h } = this.state;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.ctx.drawImage(sprite, 0, 0, 32, 32, x, y, w, h);
    // this.ctx.drawImage(sprite, 0, 0, 48, 48, x, y, 72, 72); // TODO: why is this equal?
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
      this.showRunning();
    } else {
      this.config.canJump = false;

      const ySpeed = Math.floor(this.ySpeed);
      if (ySpeed <= 0) {
        this.showInAction(this.jumpingImage);
      } else if (ySpeed > 0) {
        this.showInAction(this.fallingImage);
      }
    }
  }
}
