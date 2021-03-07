/**
 *
 */

import Curried from '../core/type/curried';
import Vector from '../vector/type/vector';
import curry from '../core/curry';
import divide from '../vector/divide';

type T = Curried<(screenSize: Vector, zoom: number) => Vector>;

const f: T = curry((screenSize, zoom) => divide(zoom, screenSize));

export default f;
