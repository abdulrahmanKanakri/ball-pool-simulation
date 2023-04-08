import { configs } from "@/configs";
import { ballsData, whiteBallData } from "@/data";
import { Ball } from "./Ball";
import { Canvas } from "./Canvas";
import { Stick } from "./Stick";
import { Table } from "./Table";

export class Game {
  private readonly whiteBall: Ball;
  private readonly balls: Ball[];
  private readonly canvas: Canvas = Canvas.instance();

  constructor(private table: Table, private stick: Stick) {
    this.whiteBall = Ball.fromData(whiteBallData);
    this.balls = [
      this.whiteBall,
      ...ballsData.map(
        (ball) => new Ball(ball.x, ball.y, ball.radius, ball.color)
      ),
    ];
  }

  private handleCollisions() {
    for (let i = 0; i < this.balls.length; i++) {
      for (let j = i + 1; j < this.balls.length; j++) {
        const first = this.balls[i];
        const second = this.balls[j];
        first.collideWith(second);
      }
    }
  }

  private drawTable() {
    this.table.draw((input) => {
      this.canvas.drawImage(input.sprite, input.positionX, input.positionY);
    });
  }

  private updateStick() {
    this.stick.update(this.whiteBall, (input) => {
      this.canvas.save();
      this.canvas.translate(input.positionX, input.positionY);
      this.canvas.rotate(input.rotation);
      this.canvas.drawImage(input.sprite, -input.originX, -input.originY);
      this.canvas.restore();
    });
  }

  private updateBalls() {
    this.balls.forEach((ball) => {
      ball.update((input) => {
        this.canvas.drawCircle(
          input.positionX,
          input.positionY,
          input.radius,
          input.color
        );
      });
    });
  }

  private update() {
    this.canvas.clear();
    this.handleCollisions();
    this.drawTable();
    this.updateBalls();
    this.updateStick();
  }

  run() {
    setInterval(() => {
      requestAnimationFrame(this.update.bind(this));
    }, configs.game.fps * 1000);
  }
}
