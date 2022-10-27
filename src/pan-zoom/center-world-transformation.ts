/**
 *
 */

import Vector from 'vector/type/vector';
import divide from 'vector/divide';

type T = (worldSize: Vector) => Vector;

const f: T = divide(2);

export default f;
