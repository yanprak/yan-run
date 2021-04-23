import { Nullable } from '../../types';

export type PropsGameObject = {
  [key in string]: number
};

export type GameResult = 'continued' | 'losing' | 'win';

export type CTX = Nullable<CanvasRenderingContext2D>;

export type GameUiParams = {
  [key in string]: () => void;
};

export type Background = {
  fillStyle: string,
  x: number,
  y: number,
  width: number,
  height: number,
  speed: number,
};

export type Config = {
  gravity: number,
  jumpsRemaining: number,
  canDoubleJump: boolean,
  box: unknown[];
  box_x: number,
  box_speed: number,
  box_max: number,
  score: number,
  height: number,
  width: number,
  player?: unknown,
  isRun?: boolean,
  background: Background
};
