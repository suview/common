/**
 *
 */

import Curried from '../core/type/curried';
import Vector from './type/vector';
import curry from '../core/curry';
import multiply from '../math/multiply';

type T = Curried<(scaleFactor: number, value: Vector) => Vector>;

const f: T = curry((scaleFactor, value) => value.map(multiply(scaleFactor)));

export default f;
