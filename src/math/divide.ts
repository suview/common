/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';

type T = Curried<(factor: number, value: number) => number>;

const f: T = curry((factor, value) => value / factor);

export default f;
