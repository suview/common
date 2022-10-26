/**
 *
 */

import Vector from '../vector/type/vector';
import pipeValue from '../core/pipe-value';
import divide from '../vector/divide';

import zoomTransformation from './zoom-transformation';

type T = (screenSize: Vector) => (zoom: number) => Vector;

const f: T = screenSize => zoom => pipeValue(
    screenSize,
    s => zoomTransformation (s) (zoom), // TODO Can be tidied when flip is implemented
    divide(2 * -1)
);

export default f;
