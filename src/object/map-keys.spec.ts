import mapKeys from './map-keys';

describe('object/mapKeys', () => {
    it('allows object keys to be changed', () => {
        const obj = {
            1: 'a',
            2: 'b',
            3: 'c'
        };
        const callback = (key: string, value: string) => `${key}-${value}`;
        const expectedValue = {
            '1-a': 'a',
            '2-b': 'b',
            '3-c': 'c'
        };

        expect(mapKeys(callback, obj)).toEqual(expectedValue);
    });

    // TODO when TypeScript allows
    // https://github.com/millsp/ts-toolbelt/issues/207
    // it('is curried', () => {
    //     expect(mapKeys(key => `a${key}`)({ a: true })).toEqual({ aa: true });
    // });
});
