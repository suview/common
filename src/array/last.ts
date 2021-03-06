/**
 *
 */

type T = <A extends unknown>(array: A[]) => A | undefined;

const f: T = (array) => array[array.length - 1];

export default f;
