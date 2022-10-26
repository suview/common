/**
 *
 */

import Vector from '../vector/type/vector';
import add from '../vector/add';

type T = (transformation: Vector) => (screenCoordinates: Vector) => Vector;

const f: T = transformation => screenCoordinates => add (screenCoordinates) (transformation);

export default f;
