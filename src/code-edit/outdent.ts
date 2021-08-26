/**
 *
 */

import Code from './type/code';
import Indentation from './type/indentation';
import Curried from '../core/type/curried';
import curry from '../core/curry';
import linesInSelection from './lines-in-selection';
import outdentLine from './outdent-line';
import contains from '../array/contains';

type T = Curried<(indentation: Indentation, code: Code) => Code>;

const f: T = curry((indentation, code) => {
    const { source } = code;
    const { start, end } = code.selection;

    const newSource = source.split('\n').map((line: string, lineNumber: number) => {
        return (contains(lineNumber, linesInSelection(code)))
            ? outdentLine(indentation, line)
            : line;
    }).join('\n');

    const leadingWhitespace = source.substring(0, start).match(/([ \t]*)([^\n]*)$/)[1].length;
    const indentationSize = typeof indentation === 'number' ? indentation : 1;
    const deletedLeadingWhitespace = (leadingWhitespace - 1) % indentationSize + 1;

    return {
        source: newSource,
        selection: {
            start: start - deletedLeadingWhitespace,
            end: end - (source.length - newSource.length)
        }
    };
});

export default f;
