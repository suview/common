/**
 *
 */

import Parts from './type/parts';
import splitBefore from './split-before';
import lowerCase from './lower-case';

type T = (value: string) => Parts;

const f: T = value => {
    // TODO For some reason pipe was incorrectly
    // not allowing the 'filter' call below.
    // Retry implementing pipe.
    const parts = splitBefore(/[A-Z]/, value);
    const filtered = parts.filter(p => p !== ''); // TODO Use array.filter and string.notEmpty when possible
    return filtered.map(lowerCase);
};

export default f;
