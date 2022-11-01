/**
 *
 */

import { pipe } from 'core';
import { split } from 'string';

type T = (source: string) => number;

// TODO Update when prop/length and toString exist
const f: T = pipe(
    split('\n'),
    lines => lines.length,
    maxLineNumber => maxLineNumber.toString(),
    maxLineNumber => maxLineNumber.length
);

export default f;
