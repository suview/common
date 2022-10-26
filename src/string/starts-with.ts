/**
 *
 */

type T = (needle: string) => (haystack: string) => boolean;

const f: T = needle => haystack => haystack.substr(0, needle.length) === needle;

export default f;
