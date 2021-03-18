/**
 *
 */

type T = <A extends unknown, B extends unknown>(callback: (a: A) => B) => (array: A[]) => B[];

const f: T = callback => array => array.map(callback);

export default f;
