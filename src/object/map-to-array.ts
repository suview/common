/**
 *
 */

type T = <A, B>(callback: (value: A, key: string) => B) => (value: Record<string, A>) => B[];

const f: T = callback => values => Object.keys(values).map(key => callback(values[key], key));

export default f;
