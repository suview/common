/**
 *
 */

type T = <A extends unknown, B extends unknown>(first: A) => (second: B) => boolean;

const f: T = first => second => first === second;

export default f;
