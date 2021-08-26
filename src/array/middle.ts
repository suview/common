/**
 *
 */

type T = <A>(arr: A[]) => A[];

const f: T = arr => arr.slice(1, -1);

export default f;
