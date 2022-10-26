/**
 *
 */

import Code from './type/code';
import Indentation from './type/indentation';

type T = (indentation: Indentation) => (code: Code) => Code;

// TODO This could be broken down into all sorts
const f: T = indentation => code => {
    const before = code.source.substring(0, code.selection.start);
    const after = code.source.substring(code.selection.end, code.source.length);
    const lastBefore = before[before.length - 1];
    const lastLine = before.split('\n').pop() || '';
    const indentationOnLastLine = lastLine.match(/^[ \t]*/);
    const indentationOnLastLineLength = indentationOnLastLine ? indentationOnLastLine[0].length : 0;
    const indentCharacter = (typeof indentation === 'number') ? ' ' : '\t';
    const isFollowingBracket = lastBefore === '{' || lastBefore === '[' || lastBefore === '(';
    let newIndentation = indentCharacter.repeat(indentationOnLastLineLength);
    if (isFollowingBracket) {
        newIndentation += (typeof indentation === 'number')
            ? indentCharacter.repeat(indentation)
            : '\t';
    }
    return {
        source: `${before}\n${newIndentation}${after}`,
        selection: {
            start: code.selection.start + 1 + newIndentation.length,
            end: code.selection.start + 1 + newIndentation.length
        }
    };
};

export default f;
