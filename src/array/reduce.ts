/**
 *
 */

type T = <A, B>(callback: (accumulator: B) => (next: A) => B) => (initialValue: B) => (array: A[]) => B;

const f: T = callback => initialValue => array => {
    return array.reduce(
        (accumulator, next) => callback (accumulator) (next),
        initialValue
    );
};

export default f;
