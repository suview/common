/**
 *
 */

import Vector from 'vector/type/vector';
import { pipeValue } from 'core';
import { worldCoordinates } from 'pan-zoom';
import { transformation } from 'pan-zoom';
import { map } from 'array';
import { join } from 'array';
import { append } from 'string';

type T = (screenSize: Vector) => (worldSize: Vector) => (pan: Vector) => (zoom: number) => string;

const f: T = screenSize => worldSize => pan => zoom => pipeValue(
    worldCoordinates
        (transformation (screenSize) (worldSize) (pan) (zoom))
        ([0, 0]),
    map(x => x.toString()), // TODO Use toString function when it exists
    join(' '),
    append(` ${screenSize[0]! / zoom}`),
    append(` ${screenSize[1]! / zoom}`)
);

export default f;
