import fromKebabCase from './from-kebab-case';

describe('string/fromKebabCase', () => {
    it('converts kebab-cases string to its parts', () => {
        const kebabString = 'example-kebab-string';
        const expectedValue = ['example', 'kebab', 'string'];

        expect(fromKebabCase(kebabString)).toEqual(expectedValue);
    });
});
