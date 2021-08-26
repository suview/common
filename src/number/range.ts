/**
 *
 */

type T = (start: number, end: number) => number[];

const f: T = (start, end) => {
    return Array(end - start + 1).fill(undefined).map((_, index) => start + index);
};

export default f;
