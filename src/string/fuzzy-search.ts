/**
 *
 */

import { pipeValue } from 'core';
import split from './split';
import { join } from 'array';
import { matches } from 'regex';

type T = (haystack: string) => (needle: string) => boolean;

const f: T = haystack => needle => {
    const regex: string = pipeValue(
        needle,
        split(''),
        join('.*')
    );
    return matches (regex) (haystack);
};

export default f;
