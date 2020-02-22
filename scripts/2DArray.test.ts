import { get2DArrayWithOnes, get2DArrayWithZeros } from "./2DArray";

describe('2DArray', (): void => {
    test('get2DArrayWithOnes', (): void => {
        expect(get2DArrayWithOnes(4)).toEqual([
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]
        ]);
    });


    test('get2DArrayWithZeros', (): void => {
        expect(get2DArrayWithZeros(2)).toEqual([
            [0,0],
            [0,0]
        ]);
    });
})
