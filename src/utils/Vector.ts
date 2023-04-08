export class Vector {
  constructor(private _x: number, private _y: number) {}

  public get x(): number {
    return this._x;
  }

  public set x(v: number) {
    this._x = v;
  }

  public get y(): number {
    return this._y;
  }

  public set y(v: number) {
    this._y = v;
  }

  add(value: number): Vector;
  add(vector: Vector): Vector;

  /**
   * add a value or a vector to the vector
   * @param {number | Vector} value
   * @returns {Vector} the result as a new vector
   */
  add(value: unknown): unknown {
    if (typeof value === "number") {
      return new Vector(this.x + value, this.y + value);
    } else if (value instanceof Vector) {
      return new Vector(this.x + value.x, this.y + value.y);
    }

    throw new Error("Invalid Vector value");
  }

  subtract(value: number): Vector;
  subtract(vector: Vector): Vector;

  /**
   * subtract a value or a vector from the vector
   * @param {number | Vector} value
   * @returns {Vector} the result as a new vector
   */
  subtract(value: unknown): unknown {
    if (typeof value === "number") {
      return new Vector(this.x - value, this.y - value);
    } else if (value instanceof Vector) {
      return new Vector(this.x - value.x, this.y - value.y);
    }

    throw new Error("Invalid Vector value");
  }

  multiply(value: number): Vector;
  multiply(vector: Vector): Vector;

  /**
   * multiply the vector by a value or a vector
   * @param {number | Vector} value
   * @returns {Vector} the result as a new vector
   */
  multiply(value: unknown): unknown {
    if (typeof value === "number") {
      return new Vector(this.x * value, this.y * value);
    } else if (value instanceof Vector) {
      return new Vector(this.x * value.x, this.y * value.y);
    }

    throw new Error("Invalid Vector value");
  }

  divide(value: number): Vector;
  divide(vector: Vector): Vector;

  /**
   * divide the vector by a value or a vector
   * @param {number | Vector} value
   * @returns {Vector} the result as a new vector
   */
  divide(value: unknown): unknown {
    if (typeof value === "number") {
      return new Vector(this.x / value, this.y / value);
    } else if (value instanceof Vector) {
      return new Vector(this.x / value.x, this.y / value.y);
    }

    throw new Error("Invalid Vector value");
  }

  /**
   * @returns {Vector} a copy of the vector
   */
  copy(): Vector {
    return new Vector(this.x, this.y);
  }

  /**
   * calculates the magnitude of the vector
   * @returns {number} the length of the vector
   */
  getMagnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * @param {Vector} vector the vector to calculate the dot product with
   * @returns {number} the dot product of the two vectors
   */
  dot(vector: Vector): number {
    return this.x * vector.x + this.y * vector.y;
  }
}
