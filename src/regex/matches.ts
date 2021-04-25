/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import match from './match';
import length from '../array/length';
import gt from '../number/gt';

type T = Curried<(regex: RegExp | string, value: string) => boolean>;

const f: T = curry((regex, value) => {
    return pipeValue(
        match(regex, value),
        length, // TODO Use array.isNotEmpty when available
        gt(0)
    );
});

export default f;
