/**
 *
 */

type T = (minimum: number) => (maximum: number) => (value: number) => number;

const f: T = minimum => maximum => value => {
    if (value < minimum) return minimum;
    if (value > maximum) return maximum;
    return value;
};

export default f;
