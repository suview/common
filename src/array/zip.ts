/**
 *
 */

type T = <A, B>(first: A[]) => (second: B[]) => Array<A | B>;

const f: T = first => second => {
    const longest = (first.length > second.length) ? first : second;
    return longest.flatMap((_: unknown, index: number) => [
        ...(first[index] !== undefined ? [first[index]] : []),
        ...(second[index] !== undefined ? [second[index]] : [])
    ])
};

export default f;
