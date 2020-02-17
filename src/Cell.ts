export class Cell {
  isAlive: boolean;
  _nextStatus: boolean;
  concentration: number;

  constructor() {
    this.isAlive = false;
    this._nextStatus = false;
    this.concentration = 0;
  }

  toggle() {
    this.isAlive = !this.isAlive;
  }

  judge(count) {
    if (this.isAlive) return count === 2 || count === 3;
    else return count === 3;
  }

  // 次の世代の状態を決める。変化があるとtrueが返る。
  survive(around) {
    this._nextStatus = this.judge(around);
    return this._nextStatus !== this.isAlive;
  }

  // 次の状態にする
  nextStage() {
    var old = this.isAlive;
    this.isAlive = this._nextStatus;
    return this.isAlive !== old;
  }
}
