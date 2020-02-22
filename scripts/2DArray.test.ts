import { get2DArrayWithOnes, get2DArrayWithZeros, slicing } from "./2DArray";

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
});
