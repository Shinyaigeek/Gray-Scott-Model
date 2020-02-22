import {
  get2DArrayWithOnes,
  get2DArrayWithZeros,
  slicing,
  get2DArrayWithRange,
  shift2dArray,
  convert1dArrayTo2d
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

  test("convert1dArrayTo2d", (): void => {
    expect(convert1dArrayTo2d([1, 2, 3, 4], 2, 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
});
