/**
 *
 */

import Curried from '../core/type/curried';
import Vector from '../vector/type/vector';
import curry from '../core/curry';
import add from '../vector/add';

type T = Curried<(transformation: Vector, screenCoordinates: Vector) => Vector>;

const f: T = curry((transformation, screenCoordinates) => add(screenCoordinates, transformation));

export default f;
