import { configs } from "@/configs";
import { Sprite } from "@/types";
import { Mouse } from "@/utils/Mouse";
import { loadSprite } from "@/utils/utils";
import { Vector } from "@/utils/Vector";
import { Ball } from "./Ball";

const originVector: Vector = new Vector(
  configs.stick.origin.x,
  configs.stick.origin.y
);

interface DrawStickCallbackInput {
  sprite: Sprite;
  positionX: number;
  positionY: number;
  originX: number;
  originY: number;
  rotation: number;
}

type DrawStickCallback = (input: DrawStickCallbackInput) => void;

export class Stick {
  private _sprite: Sprite;
  private _position: Vector;
  private _origin: Vector;
  private _rotation: number;
  private _power: number;
  private _hide: boolean;
  private _isShooting: boolean;

  constructor(private readonly mouse: Mouse) {
    this._sprite = loadSprite(configs.stick.skinFilename);
    this._position = new Vector(
      configs.stick.initialPosition.x,
      configs.stick.initialPosition.y
    );
    this._origin = originVector.copy();
    this._rotation = 0;
    this._power = 0;
    this._hide = false;
    this._isShooting = false;
  }

  update(ball: Ball, drawStick: DrawStickCallback) {
    this.onShoot(ball);
    this.updateRotation();

    this._hide = ball.isMoving ? true : false;
    if (!this._hide) {
      drawStick({
        positionX: this._position.x,
        positionY: this._position.y,
        sprite: this._sprite,
        originX: this._origin.x,
        originY: this._origin.y,
        rotation: this._rotation,
      });
    }

    if (!ball.isMoving && !this._isShooting) {
      this._position = ball.position.copy();
      this._origin = originVector.copy();
    }
  }

  updateRotation() {
    const opp = this.mouse.position.y - this._position.y; // opposite
    const adj = this.mouse.position.x - this._position.x; // adjacent
    this._rotation = Math.atan2(opp, adj);
  }

  onShoot(ball: Ball) {
    if (this.mouse.leftButtonPressed) {
      this._isShooting = true;
      if (this._origin.x < originVector.x + 200) {
        this._power += 80;
        this._origin.x += 5;
      }
    }
    if (this.mouse.leftButtonReleased) {
      this.mouse.leftButtonReleased = false;
      ball.shoot(this._power, this._rotation);
      this.reset();
    }
  }

  reset() {
    this._isShooting = false;
    this._power = 0;
    this._origin = originVector.copy();
  }
}
