import { Cell } from "./Cell";
import {
  shift2dArray,
  sum2d2d,
  mul2dWithSch,
  div2dWithSch,
  mul2dWith2d,
  minus2d2d,
  get2DArrayWithOnes,
  slicing,
  get2DArrayWithZeros,
  get2dWithRandom
} from "../scripts/2DArray";

export type Loc = {
  x: number;
  y: number;
};

export class Board {
  width: number;
  height: number;
  uMap: number[][];
  vMap: number[][];
  onChange: (x: number, y: number, cell: Cell) => void;

  dx: number;
  dt: number;

  Du: number;
  Dv: number;

  f: number;
  k: number;

  cellSize: number;
  square: number;

  timer: number | undefined;

  ctx: CanvasRenderingContext2D;

  playing: boolean;

  constructor(size: number, id: string) {
    this.width = size;
    this.height = size;
    this.uMap = get2DArrayWithOnes(this.width);
    this.vMap = get2DArrayWithZeros(this.width);
    // console.log(this.uMap,this.vMap)
    this.onChange = function(x: number, y: number, cell: Cell) {};
    this.dx = 0.01;
    this.dt = 1;
    this.Du = 0.00002;
    this.Dv = 0.00001;

    this.f = 0.025;
    this.k = 0.05;

    const canvas = document.getElementById(id)! as HTMLCanvasElement;

    this.ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;
    this.cellSize = 3;
    this.square = 20;
    this.playing = false;
  }

  calcLaplacian() {
    const laplacianU = div2dWithSch(
      minus2d2d(
        sum2d2d(
          sum2d2d(
            shift2dArray(this.uMap, 1, 0),
            shift2dArray(this.uMap, -1, 0)
          ),
          sum2d2d(shift2dArray(this.uMap, 1, 1), shift2dArray(this.uMap, -1, 1))
        ),
        mul2dWithSch(this.uMap, 4)
      ),
      this.dx * this.dx
    );

    const laplacianV = div2dWithSch(
      minus2d2d(
        sum2d2d(
          sum2d2d(
            shift2dArray(this.vMap, 1, 0),
            shift2dArray(this.vMap, -1, 0)
          ),
          sum2d2d(shift2dArray(this.vMap, 1, 1), shift2dArray(this.vMap, -1, 1))
        ),
        mul2dWithSch(this.vMap, 4)
      ),
      this.dx * this.dx
    );

    return {
      u: laplacianU,
      v: laplacianV
    };
  }

  calcGrayScott() {
    const laplacian = this.calcLaplacian();
    const dudt = sum2d2d(
      minus2d2d(
        mul2dWithSch(laplacian.u, this.Du),
        mul2dWith2d(mul2dWith2d(this.uMap, this.vMap), this.vMap)
      ),
      mul2dWithSch(
        minus2d2d(get2DArrayWithOnes(this.uMap.length), this.uMap),
        this.f
      )
    );
    // const dudt = mul2dWithSch(laplacian.u, this.Du)
    const dvdt = minus2d2d(
      sum2d2d(
        mul2dWithSch(laplacian.v, this.Dv),
        mul2dWith2d(mul2dWith2d(this.uMap, this.vMap), this.vMap)
      ),
      mul2dWithSch(this.vMap, this.f + this.k)
    );
    // const dvdt = mul2dWithSch(laplacian.v, this.Dv)

    // console.log(dudt, dvdt)

    this.uMap = sum2d2d(this.uMap, mul2dWithSch(dudt, this.dt));
    this.vMap = sum2d2d(this.vMap, mul2dWithSch(dvdt, this.dt));
    if (Number.isNaN(this.uMap[0][0])) {
      debugger;
    }
    this.drawPiece(this.uMap);
  }

  reset() {
    this.uMap = get2DArrayWithOnes(this.width);
    this.vMap = get2DArrayWithZeros(this.width);
    this.uMap = slicing(
      this.uMap,
      slicing(
        this.uMap[0],
        0.5,
        (this.height - this.square) / 2 - 1,
        (this.height + this.square) / 2 - 1
      ),
      (this.height - this.square) / 2 - 1,
      (this.height + this.square) / 2 - 1
    );
    this.uMap = sum2d2d(this.uMap, get2dWithRandom(this.width));
    this.vMap = slicing(
      this.vMap,
      slicing(
        this.vMap[0],
        0.25,
        (this.height - this.square) / 2 - 1,
        (this.height + this.square) / 2 - 1
      ),
      (this.height - this.square) / 2 - 1,
      (this.height + this.square) / 2 - 1
    );
    this.vMap = sum2d2d(this.vMap, get2dWithRandom(this.width));
    this.drawPiece(this.uMap);
  }

  start() {
    this.playing = true;
    this.timer = window.setInterval(() => this.calcGrayScott(), 1);
  }

  pause() {
    this.playing = false;
    window.clearInterval(this.timer);
  }

  drawPoint(x: number, y: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * this.cellSize,
      y * this.cellSize,
      this.cellSize,
      this.cellSize
    );
  }

  clearPoint(x: number, y: number) {
    this.ctx.clearRect(
      x * this.cellSize,
      y * this.cellSize,
      this.cellSize,
      this.cellSize
    );
  }

  drawPiece(piece: number[][]) {
    for (let i in piece) {
      const col = piece[i];
      for (let j in col) {
        this.drawPoint(
          Number(j),
          Number(i),
          `rgb(${col[j] * 255},${col[j] * 255},${col[j] * 255})`
        );
      }
    }
  }
}
