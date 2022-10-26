import outdentLine from './outdent-line';

describe('code-edit/outdentLine', () => {
    it('returns line with no leading whitespace unchanged', () => {
        const line = 'key: value';

        expect(outdentLine (4) (line)).toEqual(line);
    });

    it('removes provided number of spaces from line', () => {
        expect(outdentLine (1) (' a')).toEqual('a');
        expect(outdentLine (2) ('  a')).toEqual('a');
        expect(outdentLine (3) ('   a')).toEqual('a');
        expect(outdentLine (4) ('    a')).toEqual('a');
    });

    it('removes tab character from line', () => {
        const line = '\tkey: value';
        const expectedOutput = 'key: value';

        expect(outdentLine ('tab') (line)).toEqual(expectedOutput);
    });

    it('removes provided number of spaces from line which is already outdented', () => {
        const line = '        key: value';
        const expectedOutput = '    key: value';

        expect(outdentLine (4) (line)).toEqual(expectedOutput);
    });

    it('removes tab character from line which is already outdented', () => {
        const line = '\t\tkey: value';
        const expectedOutput = '\tkey: value';

        expect(outdentLine ('tab') (line)).toEqual(expectedOutput);
    });

    it('removes spaces from line to reach multiple of outdentation size', () => {
        const line = '       key: value';
        const expectedOutput = '    key: value';

        expect(outdentLine (4) (line)).toEqual(expectedOutput);
    });
});
