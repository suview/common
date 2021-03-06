/**
 *
 */

import Curried from '../core/type/curried';
import Vector from './type/vector';
import curry from '../core/curry';
import mapMultiple from '../array/map-multiple';
import add from '../math/add';

type T = Curried<(first: Vector, second: Vector) => Vector>;

const f: T = curry((first: Vector, second: Vector) => mapMultiple(add, first, second));

export default f;
