/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(toSubtract: number, value: number) => number>;

const f: T = curry((toSubtract, value) => value - toSubtract);

export default f;
