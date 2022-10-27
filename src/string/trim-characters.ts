/**
 *
 */

type T = (characters: string) => (value: string) => string;

const f: T = _ => _ => 'trim-characters';

export default f;

export {};
