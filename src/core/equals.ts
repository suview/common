/**
 *
 */

type T = <A extends unknown>(first: A) => (second: A) => boolean;

const f: T = first => second => first === second;

export default f;
