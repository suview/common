import mapToObject from './map-to-object';

describe('array/mapToObject', () => {
    it('maps array to key value pairs provided by callback', () => {
        const arr = ['one', 'two', 'three'];
        const callback = (x: string) => ({ key: x, value: x.toUpperCase() });
        const expectedResult = { one: 'ONE', two: 'TWO', three: 'THREE' };

        expect(mapToObject (callback) (arr)).toEqual(expectedResult);
    });

    it('returns empty object when provided with empty array', () => {
        const callback = (x: string) => ({ key: x, value: x });

        expect(mapToObject (callback) ([])).toEqual({});
    });

    it('throws error if same key is provided by two array items', () => {
        const arr = [1, 2, 3, 2];
        const callback = (x: number) => ({ key: x.toString(), value: x });

        expect(() => mapToObject (callback) (arr)).toThrowError();
    });
});
