/**
 *
 */

import Vector from './type/vector';
import Coordinates from '../geometry/type/coordinates';

type T = (value: Vector) => Coordinates;

const f: T = value => ({
    x: value[0],
    y: value[1],
    ...(value.length === 3 ? { z: value[2] } : {})
});

export default f;
