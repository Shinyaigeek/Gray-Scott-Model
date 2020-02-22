import { get2DArrayWithOnes } from "./2DArray";

describe('2DArray', (): void => {
    test('get2DArrayWithOnes', (): void => {
        expect(get2DArrayWithOnes(4)).toEqual([
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]
        ]);
    });
})