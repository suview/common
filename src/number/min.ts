/**
 *
 */

type T = (first: number) => (second: number) => number;

const f: T = first => second => first < second ? first : second;

export default f;
