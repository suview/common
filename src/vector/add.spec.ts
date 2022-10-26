import add from './add';

describe('vector/add', () => {
    it('adds the individual parts of a two dimensional vector', () => {
        const first = [5, 10];
        const second = [10, 15];

        expect(add (first) (second)).toEqual([15, 25]);
    });

    it('adds the individual parts of a three dimensional vector', () => {
        const first = [5, 10, 15];
        const second = [10, 15, 20];

        expect(add (first) (second)).toEqual([15, 25, 35]);
    });
});
