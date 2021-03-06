/**
 *
 */

import Curried from '../core/type/curried';
import curry from '../core/curry';
import pipe from '../core/pipe';
import interpolate from './interpolate';

type T = Curried<(minimum: number, maximum: number) => number>;

const f: T = curry((minimum, maximum) => pipe(Math.random, interpolate(minimum, maximum)));

export default f;
