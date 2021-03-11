import fromPascalCase from './from-pascal-case';

describe('string/fromPascalCase', () => {
    it('converts PascalCased string to its parts', () => {
        const pascalString = 'ExamplePascalString';
        const expectedValue = ['example', 'pascal', 'string'];

        expect(fromPascalCase(pascalString)).toEqual(expectedValue);
    });

    it('handles double capital letters', () => {
        const pascalString = 'GetBBox';
        const expectedValue = ['get', 'b', 'box'];

        expect(fromPascalCase(pascalString)).toEqual(expectedValue);
    });
});
