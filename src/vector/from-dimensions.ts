/**
 *
 */

import Vector from './type/vector';
import Dimensions from 'geometry/type/dimensions';

type T = (value: Dimensions) => Vector;

const f: T = value => [value.width, value.height];

export default f;
