/**
 *
 */

import Nothing from './type/nothing';

type T = (value: unknown) => value is Nothing;

const f: T = (value): value is Nothing => value === undefined || value === null;

export default f;
