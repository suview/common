/**
 *
 */

type T = (regex: RegExp | string) => (value: string) => string[];

const f: T = regex => value => {
    const match = value.match(regex);
    return match ? match.map((x: string) => x) : []; // TODO Use identity function when it exists
};

export default f;
