/**
 *
 */

import Vector from 'vector/type/vector';
import { pipeValue } from 'core';
import { divide } from 'vector';

import zoomTransformation from './zoom-transformation';

type T = (screenSize: Vector) => (zoom: number) => Vector;

const f: T = screenSize => zoom => pipeValue(
    screenSize,
    s => zoomTransformation (s) (zoom), // TODO Can be tidied when flip is implemented
    divide(2 * -1)
);

export default f;
