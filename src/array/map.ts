/**
 *
 */

type T = <A, B>(callback: (a: A, index: number) => B) => (array: A[]) => B[];

const f: T = callback => array => array.map(callback);

export default f;
