import { Config, CTX, PropsGameObject } from './type';
import Player from './Player';

import boxImage from './textures/box.png';

export default class Box {
  ctx: CTX;
  img: HTMLImageElement = new Image();

  public state: PropsGameObject = {
    x: 800,
    y: 310,
    w: 40,
    h: 40,
  };

  config: Config;

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
    this.state.x = config.box_x;
    this.img = new Image();
    this.img.src = boxImage;
  }

  public show() {
    if (!this.ctx) return;
    const { x, y, w, h } = this.state;
    this.ctx.drawImage(this.img, 0, 0, w, h, x, y, w, h);
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
