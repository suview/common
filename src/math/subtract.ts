/**
 *
 */

type T = (toSubtract: number) => (value: number) => number;

const f: T = toSubtract => value => value - toSubtract;

export default f;
