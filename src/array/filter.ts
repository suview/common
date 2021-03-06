/**
 *
 */

// TODO Curry
type T = <A extends unknown>(predicate: (element: A) => boolean) => (array: A[]) => A[];

const f: T = (predicate) => (array) => array.filter(predicate);

export default f;
