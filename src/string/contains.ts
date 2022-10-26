/**
 * Indicates whether a given string
 * is contained within another string
 *
 * ```
 * contains('ample', 'Example string'); // returns true
 * ```
 *
 * @param innerString - The string to be searched for
 * @param outerString - The string to be searched within
 * @returns boolean - whether the substring was found
 */

type T = (innerString: string) => (outerString: string) => boolean;

const f: T = innerString => outerString => outerString.includes(innerString);

export default f;
