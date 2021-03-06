/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(minimum: number, maximum: number, fraction: number) => number>;

const f: T = curry((minimum, maximum, fraction) => fraction * (maximum - minimum) + minimum);

export default f;
