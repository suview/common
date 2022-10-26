/**
 *
 */

import Vector from '../vector/type/vector';
import pipeValue from '../core/pipe-value';
import worldCoordinates from '../pan-zoom/world-coordinates';
import transformation from '../pan-zoom/transformation';
import map from '../array/map';
import join from '../array/join';
import append from '../string/append';

type T = (screenSize: Vector) => (worldSize: Vector) => (pan: Vector) => (zoom: number) => string;

const f: T = screenSize => worldSize => pan => zoom => pipeValue(
    worldCoordinates
        (transformation (screenSize) (worldSize) (pan) (zoom))
        ([0, 0]),
    map(x => x.toString()), // TODO Use toString function when it exists
    join(' '),
    append(` ${screenSize[0] / zoom}`),
    append(` ${screenSize[1] / zoom}`)
);

export default f;
