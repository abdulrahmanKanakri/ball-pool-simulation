export const configs = {
  canvasWidth: 1280,
  canvasHeight: 730,
  table: {
    initialPosition: { x: 0, y: 0 },
    skinFilename: "table.png",
    edgeSize: 83,
  },
  stick: {
    get initialPosition() {
      return { x: configs.canvasWidth / 3.57, y: configs.canvasHeight / 2 };
    },
    origin: { x: 970, y: 11 },
    skinFilename: "stick.png",
  },
  ball: { basePose: 900, diameter: 25 * 2 },
  game: { fps: 1 / 60 },
};
