/**
 *
 */

import Curried from '../core/type/curried';
import Vector from '../vector/type/vector';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import divide from '../vector/divide';

import zoomTransformation from './zoom-transformation';

type T = Curried<(screenSize: Vector, zoom: number) => Vector>;

const f: T = curry((screenSize, zoom) => pipeValue(
    screenSize,
    s => zoomTransformation(s, zoom), // TODO Can be tidied when curry placeholder is implemented
    divide(2 * -1)
));

export default f;
