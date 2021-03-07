/**
 *
 */

import Curried from '../core/type/curried';
import Vector from '../vector/type/vector';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import add from '../vector/add';
import centerScreenTransformation from './center-screen-transformation';
import centerWorldTransformation from './center-world-transformation';

type T = Curried<(screenSize: Vector, worldSize: Vector, pan: Vector, zoom: number) => Vector>;

const f: T = curry((screenSize, worldSize, pan, zoom) => pipeValue(
    pan,
    add(centerScreenTransformation(screenSize, zoom)),
    add(centerWorldTransformation(worldSize))
));


export default f;
