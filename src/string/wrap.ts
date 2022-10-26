/**
 *
 */

type T = (characters: string) => (value: string) => string;

const f: T = characters => value => `${characters[0]}${value}${characters[1] || characters[0]}`;

export default f;
