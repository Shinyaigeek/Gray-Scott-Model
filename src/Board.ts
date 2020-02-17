import { Cell } from "./Cell";
import { UCell } from "./UCell";
import { VCell } from "./VCell";
import {
  shift2dArray,
  sum2d2d,
  mul2dWithSch,
  div2dWithSch
} from "../scripts/2DArray";

export type Loc = {
  x: number;
  y: number;
};

export class Board {
  width: number;
  height: number;
  uMap: UCell[][];
  vMap: VCell[][];
  onChange: (x: number, y: number, cell: Cell) => void;

  dx: number;
  dt: number;

  Du: number;
  Dv: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.uMap = new Array(this.height).fill(new Array(this.width).fill(1));
    this.vMap = new Array(this.height).fill(new Array(this.width).fill(0));
    this.clearAll();
    this.onChange = function(x: number, y: number, cell: Cell) {};
    this.dx = 0.01;
    this.dt = 1;
    this.Du = 0.0002;
    this.Dv = 0.0001;
  }

  calcLaplacian() {
    const laplacianU = div2dWithSch(
      sum2d2d(
        sum2d2d(
          sum2d2d(
            shift2dArray(this.uMap, 1, 0),
            shift2dArray(this.uMap, -1, 0)
          ),
          sum2d2d(shift2dArray(this.uMap, 1, 1), shift2dArray(this.uMap, -1, 1))
        ),
        mul2dWithSch(this.uMap, -4)
      ),
      this.dx * this.dx
    );

    const laplacianV = div2dWithSch(
      sum2d2d(
        sum2d2d(
          sum2d2d(
            shift2dArray(this.vMap, 1, 0),
            shift2dArray(this.vMap, -1, 0)
          ),
          sum2d2d(shift2dArray(this.vMap, 1, 1), shift2dArray(this.vMap, -1, 1))
        ),
        mul2dWithSch(this.vMap, -4)
      ),
      this.dx * this.dx
    );

    return {
      u: laplacianU,
      v: laplacianV
    }
  }

  calcGrayScott(){
    const laplacian = this.calcLaplacian();
    const dudt = this.Du * 
  }

  toIndex(x: number, y: number) {
    return x + y * this.width;
  }

  toLocation(index: number) {
    return { x: index % this.width, y: Math.floor(index / this.width) };
  }

  getAllIndexes() {
    const list = [];
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        list.push(this.toIndex(x, y));
      }
    }
    return list;
  }

  clearAll() {
    this.map = this.map.map(col => {
      return col.map(c => new Cell());
    });
  }

  reverse(x: number, y: number) {
    const cell = this.map[x][y];
    cell.toggle();
    this.onChange(x, y, cell);
  }

  set(x: number, y: number, v: number) {
    const cell = this.map[x][y];
    cell.concentration = v;
    this.onChange(x, y, cell);
  }

  clear(x: number, y: number) {
    const cell = this.map[x][y];
    cell.concentration = 0;
    this.onChange(x, y, cell);
  }

  corectIndex(x: number, y: number) {
    x = x < 0 ? this.width - 1 : x;
    y = y < 0 ? this.height - 1 : y;
    x = x >= this.width ? 0 : x;
    y = y >= this.height ? 0 : y;
    return this.toIndex(x, y);
  }
}
