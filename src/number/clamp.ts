/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(minimum: number, maximum: number, value: number) => number>;

const f: T = curry((minimum, maximum, value) => {
    if (value < minimum) return minimum;
    if (value > maximum) return maximum;
    return value;
});

export default f;
