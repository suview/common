/**
 *
 */

import isArray from '../array/is-array';

type T = (value: unknown) => boolean;

const f: T = value => (typeof value === 'object' && value !== null && !isArray(value));

export default f;
