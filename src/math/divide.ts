/**
 *
 */

type T = (factor: number) => (value: number) => number;

const f: T = factor => value => value / factor;

export default f;
