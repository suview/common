/**
 *
 */

import Parts from './type/parts';

type T = (delimiter: string | RegExp) => (value: string) => Parts;

const f: T = delimiter => value => value.split(delimiter);

export default f;
