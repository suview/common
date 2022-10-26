/**
 *
 */

import Vector from './type/vector';
import divide from '../math/divide';

type T = (scaleFactor: number) => (value: Vector) => Vector;

const f: T = scaleFactor => value => value.map(divide(scaleFactor));

export default f;
