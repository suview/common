/**
 *
 */

import Curried from '../core/type/curried';
import Vector from './type/vector';
import curry from '../core/curry';
import divide from '../math/divide';

type T = Curried<(scaleFactor: number, value: Vector) => Vector>;

const f: T = curry((scaleFactor, value) => value.map(divide(scaleFactor)));

export default f;
