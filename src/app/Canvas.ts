import { configs } from "@/configs";

export class Canvas {
  private static _instance: Canvas;
  private canvasElement: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private constructor() {
    this.canvasElement = this.createCanvas();
    this.insertCanvasElement();
    this.ctx = this.createContext2d();
  }

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = configs.canvasWidth;
    canvas.height = configs.canvasHeight;

    return canvas;
  }

  private createContext2d(): CanvasRenderingContext2D {
    const context2d = this.canvasElement.getContext("2d");
    if (!context2d) {
      throw new Error(
        "The browser does not support 2 dimensional canvas rendering"
      );
    }

    return context2d;
  }

  private insertCanvasElement(): void {
    const appElement = document.getElementById("app");
    if (!appElement) {
      throw new Error("The app element is not exists");
    }

    appElement.append(this.canvasElement);
  }

  public static instance(): Canvas {
    if (!this._instance) {
      this._instance = new Canvas();
    }

    return this._instance;
  }

  public clear(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
  }

  public save(): void {
    this.ctx.save();
  }

  public restore(): void {
    this.ctx.restore();
  }

  public translate(x: number, y: number): void {
    this.ctx.translate(x, y);
  }

  public rotate(angle: number): void {
    this.ctx.rotate(angle);
  }

  public drawImage(image: CanvasImageSource, dx: number, dy: number): void {
    this.ctx.drawImage(image, dx, dy);
  }

  public drawCircle(x: number, y: number, radius: number, color: string): void {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }
}
