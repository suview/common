/**
 *
 */

type T = <A extends unknown>(value: string) => A;

const f: T = <A extends unknown>(value: string) => JSON.parse(value) as A;

export default f;
