import { configs } from "@/configs";

const ballBasePos = configs.ball.basePose;
const ballRadius = configs.ball.diameter / 2;

export interface BallData {
  x: number;
  y: number;
  radius: number;
  color: string;
}

export const whiteBallData: BallData = {
  x: configs.canvasWidth / 3.57,
  y: configs.canvasHeight / 2,
  radius: ballRadius,
  color: "white",
};

export const ballsData: BallData[] = [
  {
    x: ballBasePos + 47 * 0,
    y: configs.canvasHeight / 2 - 27 * 0,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 1,
    y: configs.canvasHeight / 2 - 27 * 1,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 1,
    y: configs.canvasHeight / 2 + 27 * 1,
    radius: ballRadius,
    color: "yellow",
  },
  {
    x: ballBasePos + 47 * 2,
    y: configs.canvasHeight / 2 - 27 * 2,
    radius: ballRadius,
    color: "yellow",
  },
  {
    x: ballBasePos + 47 * 2,
    y: configs.canvasHeight / 2 + 27 * 0,
    radius: ballRadius,
    color: "black",
  },
  {
    x: ballBasePos + 47 * 2,
    y: configs.canvasHeight / 2 + 27 * 2,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 3,
    y: configs.canvasHeight / 2 - 27 * 3,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 3,
    y: configs.canvasHeight / 2 - 27 * 1,
    radius: ballRadius,
    color: "yellow",
  },
  {
    x: ballBasePos + 47 * 3,
    y: configs.canvasHeight / 2 + 27 * 1,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 3,
    y: configs.canvasHeight / 2 + 27 * 3,
    radius: ballRadius,
    color: "yellow",
  },
  {
    x: ballBasePos + 47 * 4,
    y: configs.canvasHeight / 2 - 27 * 4,
    radius: ballRadius,
    color: "yellow",
  },
  {
    x: ballBasePos + 47 * 4,
    y: configs.canvasHeight / 2 - 27 * 2,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 4,
    y: configs.canvasHeight / 2 - 27 * 0,
    radius: ballRadius,
    color: "yellow",
  },
  {
    x: ballBasePos + 47 * 4,
    y: configs.canvasHeight / 2 + 27 * 2,
    radius: ballRadius,
    color: "red",
  },
  {
    x: ballBasePos + 47 * 4,
    y: configs.canvasHeight / 2 + 27 * 4,
    radius: ballRadius,
    color: "yellow",
  },
];
