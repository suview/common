/**
 *
 */

type T = (needle: string) => (index: number) => (haystack: string) => boolean;

const f: T = needle => index => haystack => haystack.substr(index, needle.length) === needle;

export default f;
