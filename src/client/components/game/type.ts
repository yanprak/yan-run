export type PropsGameObject = {
  [key in string]: number
};

export type CTX = CanvasRenderingContext2D | null | undefined;

export type Config = {
  player?: unknown,
  gravity: number,
  canJump: boolean,
  box: unknown[];
  box_x: number,
  score: number,
  isRun?: boolean,
  timerId?: ReturnType<typeof setTimeout>,
  height: number,
  width: number,
};
