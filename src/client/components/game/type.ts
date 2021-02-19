export type PropsGameObject = {
  [key in string]: number
};

export type ResultGame = 'continued' | 'losing' | 'win';

export type CTX = CanvasRenderingContext2D | null;

export type Background = {
  fillStyle: string,
  x: number,
  y: number,
  width: number,
  height: number,
};

export type Config = {
  gravity: number,
  canJump: boolean,
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
