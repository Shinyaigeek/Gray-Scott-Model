export class Cell {
  isAlive: boolean;
  _nextStatus: boolean;
  concentration: number;

  constructor() {
    this.isAlive = false;
    this._nextStatus = false;
    this.concentration = 0;
  }
}
