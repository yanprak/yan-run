export type PropsGameObject = {
  [key in string]: number
};

export type CTX = CanvasRenderingContext2D | null | undefined;

export type TimerId = ReturnType<typeof setTimeout> | undefined | null | number;

export type Config = {
  gravity: number,
  canJump: boolean,
  box: unknown[];
  box_x: number,
  score: number,
  height: number,
  width: number,
  player?: unknown,
  isRun?: boolean,
};
