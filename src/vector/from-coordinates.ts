/**
 *
 */

import Vector from './type/vector';
import Coordinates from 'geometry/type/coordinates';

type T = (value: Coordinates) => Vector;

const f: T = value => {
    const vector = [value.x, value.y];
    if (value.z) vector[2] = value.z;
    return vector;
};

export default f;
