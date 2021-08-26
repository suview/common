/**
 *
 */

type T = <A>(arr: A[]) => A[];

const f: T = arr => arr.slice(0, -1);

export default f;
