/**
 *
 */

import Vector from '../vector/type/vector';
import divide from '../vector/divide';

type T = (screenSize: Vector) => (zoom: number) => Vector;

const f: T = screenSize => zoom => divide (zoom) (screenSize);

export default f;
