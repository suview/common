/**
 *
 */

import Vector from 'vector/type/vector';
import { pipeValue } from 'core';
import { add } from 'vector';
import centerScreenTransformation from './center-screen-transformation';
import centerWorldTransformation from './center-world-transformation';

type T = (screenSize: Vector) => (worldSize: Vector) => (pan: Vector) => (zoom: number) => Vector;

const f: T = screenSize => worldSize => pan => zoom => pipeValue(
    pan,
    add (centerScreenTransformation (screenSize) (zoom)),
    add (centerWorldTransformation (worldSize))
);


export default f;
