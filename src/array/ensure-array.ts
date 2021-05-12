/**
 *
 */

type T = <A extends unknown>(value: A | A[]) => A[];

const f: T = value => Array.isArray(value) ? value : [value]; // TODO Use our own isArray function

export default f;
