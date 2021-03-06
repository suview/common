/**
 *
 */

import Vector from './type/vector';
import Dimensions from '../geometry/type/dimensions';

type T = (value: Vector) => Dimensions;

const f: T = value => ({ width: value[0], height: value[1] });

export default f;
