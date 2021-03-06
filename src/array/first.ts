/**
 *
 */

type T = <A extends unknown>(array: A[]) => A | undefined;

const f: T = (array) => array[0];

export default f;
