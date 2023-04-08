import { configs } from "@/configs";
import { BallData } from "@/data";
import { Vector } from "@/utils/Vector";

interface DrawBallCallbackInput {
  color: string;
  positionX: number;
  positionY: number;
  radius: number;
}

type DrawBallCallback = (input: DrawBallCallbackInput) => void;

export class Ball {
  private _position: Vector;
  private _velocity: Vector;
  private _mass: number;
  private _radius: number;
  private _color: string;
  private _isMoving: boolean;

  constructor(
    x = 0,
    y = 0,
    radius = configs.ball.diameter / 2,
    color = "black"
  ) {
    this._position = new Vector(x, y);
    this._radius = radius;
    this._color = color;
    this._velocity = new Vector(0, 0);
    this._mass = 2;
    this._isMoving = false;
  }

  get position(): Vector {
    return this._position;
  }

  set position(position: Vector) {
    this._position = position;
  }

  get velocity(): Vector {
    return this._velocity;
  }

  set velocity(velocity: Vector) {
    this._velocity = velocity;
  }

  get mass(): number {
    return this._mass;
  }

  get isMoving(): boolean {
    return this._isMoving;
  }

  collideWith(ball: Ball) {
    // find normal vector
    const n = this.position.subtract(ball.position);

    // find distance
    const dist = n.getMagnitude();

    if (dist > configs.ball.diameter) return;

    // find minimum translation distance
    const mtd = n.multiply((configs.ball.diameter - dist) / dist);

    // push-pull balls apart
    this.position = this.position.add(mtd.multiply(0.5));
    ball.position = ball.position.subtract(mtd.multiply(0.5));

    // find unit normal vector
    const un = n.multiply(1 / n.getMagnitude());

    // find unit tangent vector
    const ut = new Vector(-un.y, un.x);

    // project velocities onto the un and ut vectors
    const v1n = un.dot(this.velocity);
    const v1t = ut.dot(this.velocity);
    const v2n = un.dot(ball.velocity);
    const v2t = ut.dot(ball.velocity);

    // find new normal velocities
    const v1nTagNormal =
      (v1n * (this.mass - ball.mass) + 2 * ball.mass * v2n) /
      (this.mass + ball.mass);
    const v2nTagNormal =
      (v2n * (ball.mass - this.mass) + 2 * this.mass * v1n) /
      (this.mass + ball.mass);

    // convert scalar normal
    const v1nTag = un.multiply(v1nTagNormal);
    const v1tTag = ut.multiply(v1t);
    const v2nTag = un.multiply(v2nTagNormal);
    const v2tTag = ut.multiply(v2t);

    this.velocity = v1nTag.add(v1tTag);
    ball.velocity = v2nTag.add(v2tTag);
  }

  update(drawBall: DrawBallCallback) {
    drawBall({
      color: this._color,
      positionX: this._position.x,
      positionY: this._position.y,
      radius: this._radius,
    });

    if (Math.abs(this.velocity.x) < 1 || Math.abs(this.velocity.y) < 1) {
      this.velocity = new Vector(0, 0);
    }

    this.position = this.position.add(this.velocity.multiply(configs.game.fps));
    this.velocity = this.velocity.multiply(0.984);

    if (
      this.position.x + this._radius >
        configs.canvasWidth - configs.table.edgeSize ||
      this.position.x - this._radius < configs.table.edgeSize
    ) {
      this.velocity.x *= -1;
    }

    if (
      this.position.y + this._radius >
        configs.canvasHeight - configs.table.edgeSize ||
      this.position.y - this._radius < configs.table.edgeSize
    ) {
      this.velocity.y *= -1;
    }

    this._isMoving = this.velocity.x !== 0 || this.velocity.y !== 0;
  }

  shoot(F: number, theta: number) {
    this.velocity = new Vector(F * Math.cos(theta), F * Math.sin(theta));
  }

  static fromData(data: BallData) {
    return new Ball(data.x, data.y, data.radius, data.color);
  }
}
