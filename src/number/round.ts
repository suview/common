/**
 *
 */

type T = (step: number) => (value: number) => number;

const f: T = step => value => Math.round(value / step) * step;

export default f;
