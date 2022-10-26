import filter from './filter';

describe('object/filter', () => {
    it('returns subset of object values which match the provided predicate', () => {
        const isEven = (x: number) => x % 2 === 0;
        const obj = { one: 1, two: 2, three: 3, four: 4 };
        const expectedObj = { two: 2, four: 4 };

        expect(filter (isEven) (obj)).toEqual(expectedObj);
    });

    it('returns empty object if no matches are found', () => {
        const isGreateThanTen = (x: number) => x > 10;
        const obj = { one: 1, two: 2, three: 3, four: 4 };

        expect(filter (isGreateThanTen) (obj)).toEqual({});
    });
});
