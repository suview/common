import map from './map';

describe('object/map', () => {
    it('allows object values to be changed', () => {
        const value = {
            one: false,
            two: false,
            three: false
        };
        const callback = () => true;
        const expectedValue = {
            one: true,
            two: true,
            three: true
        };

        expect(map(callback, value)).toEqual(expectedValue);
    });

    it('provides value, key and object to the callback', () => {
        const value = {
            a: 1,
            b: 2
        };
        const callback = (num: number, letter: string, obj: Record<string, number>) =>
            `${letter}-${num} from ${JSON.stringify(obj)}`;
        const expectedValue = {
            a: 'a-1 from {"a":1,"b":2}',
            b: 'b-2 from {"a":1,"b":2}'
        };

        expect(map(callback, value)).toEqual(expectedValue);
    });

    // TODO when TypeScript allows
    // https://github.com/millsp/ts-toolbelt/issues/207
    // it('is curried', () => {
    //     expect(map(() => true)({ a: false })).toEqual({ a: true });
    // });
});
