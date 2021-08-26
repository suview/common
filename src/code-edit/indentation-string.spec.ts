import indentationString from './indentation-string';

describe('code-edit/indentationString', () => {
    it('returns tab character if requested in tab mode', () => {
        expect(indentationString('tab', '')).toEqual('\t');
    });

    it('returns specified number of spaces when there are no preceding characters', () => {
        expect(indentationString(2, '')).toEqual('  ');
        expect(indentationString(4, '')).toEqual('    ');
    });

    it('returns specified number of spaces when preceding characters are a multiple of the indentation size', () => {
        expect(indentationString(2, 'ab')).toEqual('  ');
        expect(indentationString(2, 'abcd')).toEqual('  ');
        expect(indentationString(4, 'abcd')).toEqual('    ');
        expect(indentationString(4, 'abcdefgh')).toEqual('    ');
    });

    it('returns less spaces when preceding characters are not a multiple of the indentation size', () => {
        expect(indentationString(2, 'a')).toEqual(' ');
        expect(indentationString(2, 'abc')).toEqual(' ');
        expect(indentationString(4, 'a')).toEqual('   ');
        expect(indentationString(4, 'ab')).toEqual('  ');
        expect(indentationString(4, 'abc')).toEqual(' ');
        expect(indentationString(4, 'abcde')).toEqual('   ');
    });

    // TODO Curry
});
