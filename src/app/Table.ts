import { configs } from "@/configs";
import { Sprite } from "@/types";
import { loadSprite } from "@/utils/utils";
import { Vector } from "@/utils/Vector";

interface DrawTableCallbackInput {
  sprite: Sprite;
  positionX: number;
  positionY: number;
}

type DrawTableCallback = (input: DrawTableCallbackInput) => void;

export class Table {
  private readonly position: Vector;
  private readonly sprite: Sprite;

  constructor() {
    this.position = new Vector(
      configs.table.initialPosition.x,
      configs.table.initialPosition.y
    );
    this.sprite = loadSprite(configs.table.skinFilename);
  }

  draw(drawTable: DrawTableCallback) {
    drawTable({
      sprite: this.sprite,
      positionX: this.position.x,
      positionY: this.position.y,
    });
  }
}
