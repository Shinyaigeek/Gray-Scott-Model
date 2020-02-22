import { Cell } from "./Cell";
import { UCell } from "./UCell";
import { VCell } from "./VCell";
import {
  shift2dArray,
  sum2d2d,
  mul2dWithSch,
  div2dWithSch,
  mul2dWith2d,
  minus2d2d,
  get2DArrayWithOnes,
  slicing
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

  ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number, id: string) {
    this.width = width;
    this.height = height;
    this.uMap = new Array(this.height).fill(new Array(this.width).fill(1));
    this.vMap = new Array(this.height).fill(new Array(this.width).fill(0));
    // console.log(this.uMap,this.vMap)
    this.onChange = function(x: number, y: number, cell: Cell) {};
    this.dx = 0.01;
    this.dt = 1;
    this.Du = 0.0002;
    this.Dv = 0.0001;

    this.f = 0.022;
    this.k = 0.051;

    const canvas = document.getElementById(id)! as HTMLCanvasElement;
    this.ctx = canvas.getContext("2D")! as CanvasRenderingContext2D;
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

    console.log(laplacianU, laplacianV)

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
    const dvdt = minus2d2d(
      sum2d2d(
        mul2dWithSch(laplacian.v, this.Dv),
        mul2dWith2d(mul2dWith2d(this.uMap, this.vMap), this.vMap)
      ),
      mul2dWithSch(this.vMap, this.f + this.k)
    );

    // console.log(dudt, dvdt)

    // @ts-ignore
    this.uMap = sum2d2d(this.uMap, mul2dWithSch(dudt, this.dt));
    // @ts-ignore
    this.vMap = sum2d2d(this.vMap, mul2dWithSch(dvdt, this.dt));
    // console.log(this.uMap, this.vMap)
  }

  start() {
    const square = 20;
    this.uMap = slicing(this.uMap, slicing(this.uMap[0], 0.5,(this.height - square) / 2,(this.height + square) / 2) ,(this.height - square) / 2,(this.height + square) / 2)
    this.vMap = slicing(this.vMap, slicing(this.vMap[0], 0.25,(this.height - square) / 2,(this.height + square) / 2) ,(this.height - square) / 2,(this.height + square) / 2)
    setInterval(() => this.calcGrayScott(), 2500);
  }

  drawPoint(x: number, y: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * 3 + 1, y * 3 + 1, 3 - 1, 3 - 1);
  }

  clearPoint(x: number, y: number) {
    this.ctx.clearRect(x * 3, y * 3, 3, 3);
  }

  drawPiece(
    loc: {
      x: number;
      y: number;
    },
    piece: Cell
  ) {
    var cell = piece;
    if (cell.isAlive) {
      this.drawPoint(loc.x, loc.y, "#666666");
    } else {
      this.clearPoint(loc.x, loc.y);
    }
  }
}
