/**
 *
 */

type T = (minimum: number) => (maximum: number) => (fraction: number) => number;

const f: T = minimum => maximum => fraction => fraction * (maximum - minimum) + minimum;

export default f;
