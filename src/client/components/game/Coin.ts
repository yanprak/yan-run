import { Config, CTX, PropsGameObject } from './type';
import coinImage from './textures/sprite/coin/coin.png';
import Player from './Player';

export default class Coin {
  ctx: CTX;
  img: HTMLImageElement = new Image();

  public state: PropsGameObject = {
    x: 800,
    y: 180,
    w: 32,
    h: 32,
  };

  private maxWidthImage = 192;
  private tickCount = 0;
  private ticksPerFrame = 4;
  private frameIndex = 0;
  private frame = 6;

  config: Config;

  wasCollected: boolean;

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
    this.state.x = config.coin_x;
    this.img = new Image();
    this.img.src = coinImage;
    this.wasCollected = false;
  }

  public show() {
    if (!this.ctx || this.wasCollected) return;
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

  public collect() {
    if (!this.ctx) return;
    this.wasCollected = true;
  }

  public update() {
    const p = (this.config.player as Player).state;
    const { x, y, w, h } = this.state;

    return (
      x < (p.x + p.w)
      && (x + w) > p.x
      && y < (p.y + p.h)
      && (y + h) > p.y
    );
  }
}
