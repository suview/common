/**
 *
 */

import Curried from '../core/type/curried';
import Vector from '../vector/type/vector';
import curry from '../core/curry';
import pipeValue from '../core/pipe-value';
import worldCoordinates from '../pan-zoom/world-coordinates';
import transformation from '../pan-zoom/transformation';
import join from '../array/join';
import append from '../string/append';

type T = Curried<(screenSize: Vector, worldSize: Vector, pan: Vector, zoom: number) => string>;

const f: T = curry((screenSize, worldSize, pan, zoom) => pipeValue(
    worldCoordinates(
        transformation(
            screenSize,
            worldSize,
            pan,
            zoom
        ),
        [0, 0]
    ),
    join(' '),
    append(` ${screenSize[0] / zoom}`),
    append(` ${screenSize[1] / zoom}`)
));

export default f;
