/**
 *
 */

import Parts from './type/parts';
import split from './split';

type T = (value: string) => Parts;

const f: T = split('-');

export default f;
