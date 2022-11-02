import set from './set';

describe('object/set', () => {
    it('adds non-existant property to provided object', () => {
        const target = { one: 'One' };
        const expectedResult = { one: 'One', two: 'Two' };

        expect(set ('two') ('Two') (target)).toEqual(expectedResult);
    });

    it('overrides existing setting on provided object', () => {
        const target = { one: 'One', two: 'Two' };
        const expectedResult = { one: 'One', two: 'Updated' };

        expect(set ('two') ('Updated') (target)).toEqual(expectedResult);
    });
});
