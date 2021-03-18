/**
 *
 */

type T = <A, B>(callback: (acc: B, next: A) => B, initialValue: B) => (array: A[]) => B;

const f: T = (callback, initialValue) => array => array.reduce(callback, initialValue);

export default f;
