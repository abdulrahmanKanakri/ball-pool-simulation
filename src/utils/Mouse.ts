import { Vector } from "./Vector";

export class Mouse {
  private static _instance: Mouse;

  public position: Vector;
  public leftButtonPressed: boolean;
  public leftButtonReleased: boolean;

  private constructor() {
    this.position = new Vector(0, 0);
    this.leftButtonPressed = false;
    this.leftButtonReleased = false;
  }

  public static instance(): Mouse {
    if (!this._instance) {
      this._instance = new Mouse();
    }

    return this._instance;
  }

  onMouseMove(e: MouseEvent) {
    this.position.x = e.pageX;
    this.position.y = e.pageY;
  }

  onMouseDown(e: MouseEvent) {
    if (e.which === 1) {
      this.leftButtonPressed = true;
      this.leftButtonReleased = false;
    }
  }

  onMouseUp(e: MouseEvent) {
    if (e.which === 1) {
      this.leftButtonPressed = false;
      this.leftButtonReleased = true;
    }
  }
}
