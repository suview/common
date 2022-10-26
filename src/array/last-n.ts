/**
 *
 */

type T = <A extends unknown>(amount: number) => (array: A[]) => A[] | undefined;

const f: T = amount => array => {
    if (amount === 0) return [];
    if (amount > array.length) return undefined;
    return array.slice(amount * -1);
};

export default f;
