import {
  get2DArrayWithOnes,
  get2DArrayWithZeros,
  slicing,
  get2DArrayWithRange,
  shift2dArray,
  convert1dArrayTo2d,
  convert2dArrayTo1d,
  sum2d2d,
  minus2d2d,
  div2dWithSch,
  mul2dWithSch,
  mul2dWith2d
} from "./2DArray";

describe("2DArray", (): void => {
  test("get2DArrayWithOnes", (): void => {
    expect(get2DArrayWithOnes(4)).toEqual([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ]);
  });

  test("get2DArrayWithZeros", (): void => {
    expect(get2DArrayWithZeros(2)).toEqual([
      [0, 0],
      [0, 0]
    ]);
  });

  test("slicing", (): void => {
    expect(slicing([1, 2, 3, 4, 5, 6, 7], 0, 2, 4)).toEqual([
      1,
      2,
      0,
      0,
      5,
      6,
      7
    ]);
  });

  test("slicing2", (): void => {
    expect(
      slicing(
        [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        slicing([0, 0, 0, 0, 0], 0.5, 1, 4),
        1,
        4
      )
    ).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0.5, 0.5, 0.5, 0],
      [0, 0.5, 0.5, 0.5, 0],
      [0, 0.5, 0.5, 0.5, 0],
      [0, 0, 0, 0, 0]
    ]);
  });

  test("shift2dArray", (): void => {
    expect(slicing([1, 2, 3, 4, 5, 6, 7], 0, 2, 4)).toEqual([
      1,
      2,
      0,
      0,
      5,
      6,
      7
    ]);
  });

  test("get2DArrayWithRange", (): void => {
    expect(get2DArrayWithRange(4)).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]);
  });

  test("shift2dArray", (): void => {
    expect(shift2dArray(get2DArrayWithRange(4), 2)).toEqual([
      [15, 16, 1, 2],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
      [11, 12, 13, 14]
    ]);
  });

  test("shift2dArray2", (): void => {
    expect(shift2dArray(get2DArrayWithRange(4), 2, 0)).toEqual([
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [1, 2, 3, 4],
      [5, 6, 7, 8]
    ]);
  });

  test("shift2dArray3", (): void => {
    expect(shift2dArray(get2DArrayWithRange(4), 2, 1)).toEqual([
      [3, 4, 1, 2],
      [7, 8, 5, 6],
      [11, 12, 9, 10],
      [15, 16, 13, 14]
    ]);
  });

  test("shift2dArray4", (): void => {
    expect(shift2dArray(get2DArrayWithRange(4), -2)).toEqual([
      [3, 4, 5, 6],
      [7, 8, 9, 10],
      [11, 12, 13, 14],
      [15, 16, 1, 2]
    ]);
  });

  test("shift2dArray5", (): void => {
    expect(shift2dArray(get2DArrayWithRange(4), -1, 0)).toEqual([
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [1, 2, 3, 4]
    ]);
  });

  test("shift2dArray6", (): void => {
    expect(shift2dArray(get2DArrayWithRange(4), -1, 1)).toEqual([
      [2, 3, 4, 1],
      [6, 7, 8, 5],
      [10, 11, 12, 9],
      [14, 15, 16, 13]
    ]);
  });

  test("convert1dArrayTo2d", (): void => {
    expect(convert1dArrayTo2d([1, 2, 3, 4], 2, 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  test("convert2dto1d", (): void => {
    expect(
      convert2dArrayTo1d([
        [1, 2],
        [3, 4]
      ])
    ).toEqual([1, 2, 3, 4]);
  });

  test("sum2d2d", (): void => {
    expect(
      sum2d2d(
        [
          [1, 2],
          [3, 4]
        ],
        [
          [5, 6],
          [7, 8]
        ]
      )
    ).toEqual([
      [6, 8],
      [10, 12]
    ]);
  });

  test("minus2d2d", (): void => {
    expect(
      minus2d2d(
        [
          [9, 6, 3, 1],
          [4, 2, 1, -2]
        ],
        [
          [1, 2, 3, 4],
          [4, 3, 2, 1]
        ]
      )
    ).toEqual([
      [8, 4, 0, -3],
      [0, -1, -1, -3]
    ]);
  });

  test("div2dWithSch", (): void => {
    expect(
      div2dWithSch(
        [
          [8, 2],
          [3, 7],
          [0, 12]
        ],
        2
      )
    ).toEqual([
      [4, 1],
      [1.5, 3.5],
      [0, 6]
    ]);
  });

  test("mul2dWithSch", (): void => {
    expect(
      mul2dWithSch(
        [
          [8, 2],
          [3, 7],
          [0, 12]
        ],
        2
      )
    ).toEqual([
      [16, 4],
      [6, 14],
      [0, 24]
    ]);
  });

  test("mul2dWith2d", (): void => {
    expect(
      mul2dWith2d(
        [
          [1, 2],
          [3, 4],
          [5, 6]
        ],
        [
          [12, 11, 45, 56],
          [23, 24, 67, 78]
        ]
      )
    ).toEqual([
      [58, 59, 179, 212],
      [128, 129, 403, 480],
      [198, 199, 627, 748]
    ]);
  });

  
});
