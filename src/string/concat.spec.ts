import concat from './concat';

describe('string/concat', () => {
    it('concatenates two strings', () => {
        expect(concat('exa', 'mple')).toEqual('example');
    });

    it('is curried', () => {
        expect(concat('exa')('mple')).toEqual('example');
    });
});
