/**
 *
 */

import pipe from 'core/pipe';
import split from 'string/split';

type T = (source: string) => number;

// TODO Update when prop/length and toString exist
const f: T = pipe(
    split('\n'),
    lines => lines.length,
    maxLineNumber => maxLineNumber.toString(),
    maxLineNumber => maxLineNumber.length
);

export default f;
