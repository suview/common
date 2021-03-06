/**
 *
 */

type T = <A extends unknown, B extends unknown, C extends unknown>(cb: (a: A, b: B) => C, first: A[], second: B[]) => C[];

const f: T = (callback, first, second) => first.map((_, index) => callback(first[index], second[index]));

export default f;
