import linesInSelection from './lines-in-selection';

describe('code-edit/linesInSelection', () => {
    it('returns array containing zero if there are no newline characters in the input', () => {
        const inputCode = {
            source: '{ key: value }',
            selection: { start: 5, end: 7 }
        };
        const expectedOutput = [0];

        expect(linesInSelection(inputCode)).toEqual(expectedOutput);
    });

    it('returns array containing all line numbers if selection covers entire input', () => {
        const source = '{\n    key: value\n}';
        const inputCode = {
            source,
            selection: { start: 0, end: source.length }
        };
        const expectedOutput = [0, 1, 2];

        expect(linesInSelection(inputCode)).toEqual(expectedOutput);
    });

    it('returns array containing only line numbers included in the provided selection', () => {
        const inputCode = {
            source: '{\n    key: value\n    key: value\n}',
            selection: { start: 6, end: 21 }
        };
        const expectedOutput = [1, 2];

        expect(linesInSelection(inputCode)).toEqual(expectedOutput);
    });
});
