import lineNumberDigits from './line-number-digits';
import range from 'number/range';

describe('code-edit/lineNumberDigits', () => {
    it('returns 1 for empty source code', () => {
        expect(lineNumberDigits('')).toEqual(1);
    });

    it('returns 1 for single line source code', () => {
        expect(lineNumberDigits('source code')).toEqual(1);
    });

    it('returns 1 for double line source code', () => {
        expect(lineNumberDigits('source\ncode')).toEqual(1);
    });

    it('returns 1 for source code with line 9', () => {
        const source = '1\n2\n3\n4\n5\n6\n7\n8\n9';

        expect(lineNumberDigits(source)).toEqual(1);
    });

    it('returns 2 for source code with line 10', () => {
        const source = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';

        expect(lineNumberDigits(source)).toEqual(2);
    });

    it('returns 2 for source code with line 99', () => {
        const source = range(1, 99).join('\n');

        expect(lineNumberDigits(source)).toEqual(2);
    });

    it('returns 3 for source code with line 100', () => {
        const source = range(1, 100).join('\n');

        expect(lineNumberDigits(source)).toEqual(3);
    });

    it('returns 3 for source code with line 999', () => {
        const source = range(1, 999).join('\n');

        expect(lineNumberDigits(source)).toEqual(3);
    });

    it('returns 4 for source code with line 1000', () => {
        const source = range(1, 1000).join('\n');

        expect(lineNumberDigits(source)).toEqual(4);
    });
});
