import indentLine from './indent-line';

describe('code-edit/indentLine', () => {
    it('adds provided number of spaces to line', () => {
        expect(indentLine (1) ('a')).toEqual(' a');
        expect(indentLine (2) ('a')).toEqual('  a');
        expect(indentLine (3) ('a')).toEqual('   a');
        expect(indentLine (4) ('a')).toEqual('    a');
    });

    it('adds tab character to line', () => {
        const line = 'key: value';
        const expectedOutput = '\tkey: value';

        expect(indentLine ('tab') (line)).toEqual(expectedOutput);
    });

    it('adds provided number of spaces to line which is already indented', () => {
        const line = '    key: value';
        const expectedOutput = '        key: value';

        expect(indentLine (4) (line)).toEqual(expectedOutput);
    });

    it('adds tab character to line which is already indented', () => {
        const line = '\tkey: value';
        const expectedOutput = '\t\tkey: value';

        expect(indentLine ('tab') (line)).toEqual(expectedOutput);
    });

    it('adds spaces to line to reach multiple of indentation size', () => {
        const line = '     key: value';
        const expectedOutput = '        key: value';

        expect(indentLine (4) (line)).toEqual(expectedOutput);
    });
});
