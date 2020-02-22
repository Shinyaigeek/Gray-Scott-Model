// import React, { useState } from "react";
// import {
//   get2DArrayWithOnes,
//   get2DArrayWithZeros,
//   slicing
// } from "../scripts/2DArray";
// import { Column } from "./Column";
// import { Loc } from "./Board";
// import { Cell } from "./Cell";

// // function Canvas() {
// //   const [gridSize, setGridSize] = useState(256);
// //   const [dX, setDX] = useState(0.01);
// //   const [dt, setDt] = useState(1);
// //   const [visualizationStep, setVisualizationStep] = useState(8);
// //   const [Du, setDu] = useState(0.00002);
// //   const [Dv, setDv] = useState(0.00001);
// //   const [f, setF] = useState(0.022);
// //   const [k, setK] = useState(0.051);

// //   const [u, setU] = useState(get2DArrayWithOnes(gridSize));
// //   const [v, setV] = useState(get2DArrayWithZeros(gridSize));

// //   const [square, setSquare] = useState(20);

// //   function reset() {}

// //   function start() {}

// //   return <div>
// //       <canvas id="canvas" />
// //   </div>;
// // }

// type getPos = (x: number, y: number) => void;

// export class Canvas {
//   cellSize: number;
//   canvas: HTMLCanvasElement;
//   ctx: CanvasRenderingContext2D;
//   width: number;
//   height: number;
//   onClick: getPos;
//   onMouseDown: getPos;
//   onMouseMove: getPos;
//   onMouseUp: getPos;

//   constructor(id: string, width: number, height: number) {
//     this.cellSize = 12;
//     this.canvas = document.getElementById(id)! as HTMLCanvasElement;
//     this.ctx = this.canvas.getContext("2d")!;
//     this.ctx.canvas.width = width;
//     this.ctx.canvas.height = height;
//     this.width = this.ctx.canvas.width;
//     this.height = this.ctx.canvas.height;

//     this.clearAll();

//     this.onClick = function(x: number, y: number) {};
//     this.onMouseDown = function(x: number, y: number) {};
//     this.onMouseMove = function(x: number, y: number) {};
//     this.onMouseUp = function(x: number, y: number) {};

//     this.canvas.onclick = e => {
//       const pt = this.getPoint(e);
//       this.onClick(pt.x, pt.y);
//     };

//     this.canvas.onmousedown = e => {
//       const pt = this.getPoint(e);
//       this.onMouseDown(pt.x, pt.y);
//     };

//     this.canvas.onmousemove = e => {
//       const pt = this.getPoint(e);
//       this.onMouseMove(pt.x, pt.y);
//     };

//     this.canvas.onmouseup = e => {
//       const pt = this.getPoint(e);
//       this.onMouseUp(pt.x, pt.y);
//     };
//   }

//   getPoint(e: MouseEvent) {
//     const target = e.target! as HTMLElement;
//     const rect = target.getBoundingClientRect();
//     let x = e.clientX - Math.floor(rect.left);
//     let y = e.clientY - Math.floor(rect.top);
//     x = Math.floor(x / this.cellSize);
//     y = Math.floor(y / this.cellSize);
//     return { x: x, y: y };
//   }

//   drawPoint(x: number, y: number, color: string) {
//     this.ctx.fillStyle = color;
//     this.ctx.fillRect(
//       x * this.cellSize + 1,
//       y * this.cellSize + 1,
//       this.cellSize - 1,
//       this.cellSize - 1
//     );
//   }

//   drawVRuleLine(x: number) {
//     this.ctx.strokeStyle = "#aaaaaa";
//     this.ctx.lineWidth = 0.1;
//     this.ctx.beginPath();
//     this.ctx.moveTo(x + 0.5, 0);
//     this.ctx.lineTo(x + 0.5, this.height);
//     this.ctx.closePath();
//     this.ctx.stroke();
//   }

//   drawHRuleLine(y: number) {
//     this.ctx.strokeStyle = "#aaa";
//     this.ctx.lineWidth = 0.1;
//     this.ctx.beginPath();
//     this.ctx.moveTo(0, y + 0.5);
//     this.ctx.lineTo(this.width, y + 0.5);
//     this.ctx.closePath();
//     this.ctx.stroke();
//   }

//   clearAll() {
//     this.ctx.clearRect(0, 0, this.width, this.height);
//     for (let x = 0; x < this.width; x += this.cellSize) {
//       this.drawVRuleLine(x);
//     }
//     for (let y = 0; y < this.height; y += this.cellSize) {
//       this.drawHRuleLine(y);
//     }
//   }

//   getColor(x: number, y: number) {
//     const pixel = this.ctx.getImageData(
//       x * this.cellSize,
//       y * this.cellSize,
//       1,
//       1
//     );
//     const data = pixel.data;
//     return Canvas.toRgbaStr(data[0], data[1], data[2], data[3]);
//   }

//   clearPoint(x: number, y: number) {
//     this.ctx.clearRect(
//       x * this.cellSize,
//       y * this.cellSize,
//       this.cellSize,
//       this.cellSize
//     );
//   }

//   drawPiece(loc: Loc, piece: Cell) {
//     const cell = piece;
//     if (cell.isAlive) {
//       this.drawLife(loc, "#666666");
//     } else {
//       this.clearPoint(loc.x, loc.y);
//     }
//   }

//   drawLife(loc: Loc, color:string) {
//     this.drawPoint(loc.x, loc.y, color);
//   }

//   static toRgbaStr(r: number, g: number, b: number, a: number) {
//     return "rgba(" + r + "," + g + "," + b + "," + a + ")";
//   }
// }

// export default Canvas;
