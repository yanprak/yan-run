import { PropsGameObject, Config, CTX } from './type';
import {Player} from "./Player";

export class Box {
  ctx: CTX;

  public state: PropsGameObject = {
    x: 800,
    y: 310,
    w: 40,
    h: 40,
  };

  ySpeed = 0;

  xSpeed = 0;

  config: Config;

  constructor(config: Config, ctx: CTX) {
    this.config = config;
    this.ctx = ctx;
    this.state.x = config.box_x;
  }

  public show() {
    if (!this.ctx) return;
    this.ctx.fillStyle = 'gray';
    const { x, y, w, h } = this.state;
    this.ctx.fillRect(x, y, w, h);
  }

  public update() {
    const p = (this.config.player as Player).state;
    const { x, y, w, h } = this.state;
    const isUpdate = (
      x < (p.x + p.w)
      && (x + w) > p.x
      && y < (p.y + p.h)
      && (y + h) > p.y
    );
    return isUpdate;
  }
}
