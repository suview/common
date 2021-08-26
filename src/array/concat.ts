/**
 *
 */

type T = <A>(first: A[], second: A[]) => A[];

const f: T = (first, second) => [...first, ...second];

export default f;
