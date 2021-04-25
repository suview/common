/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import split from './split';
import join from '../array/join';
import matches from '../regex/matches';

type T = Curried<(haystack: string, needle: string) => boolean>;

const f: T = curry((haystack, needle) => {
    const regex: string = pipeValue(
        needle,
        split(''),
        join('.*')
    );
    return matches(regex, haystack);
});

export default f;
