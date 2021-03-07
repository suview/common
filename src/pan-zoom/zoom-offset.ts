/**
 *
 */

import Curried from '../core/type/curried';
import Vector from '../vector/type/vector';
import curry from '../core/curry';
import worldCoordinates from './world-coordinates';
import transformation from './transformation';
import divide from '../vector/divide';
import subtract from '../vector/subtract';

type T = Curried<(screenSize: Vector, worldSize: Vector, pan: Vector, previousZoom: number, newZoom: number, origin: Vector) => Vector>;

const f: T = curry((screenSize, worldSize, pan, previousZoom, newZoom, origin) => {
    const preWorldCoordinates = worldCoordinates(
        transformation(
            screenSize,
            worldSize,
            pan,
            previousZoom
        ),
        divide(previousZoom, origin)
    );

    const postWorldCoordinates = worldCoordinates(
        transformation(
            screenSize,
            worldSize,
            pan,
            newZoom
        ),
        divide(newZoom, origin)
    );

    return subtract(postWorldCoordinates, preWorldCoordinates);
});

export default f;
