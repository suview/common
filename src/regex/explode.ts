/**
 *
 */

type T = <U>(regex: RegExp) => (keys: string[]) => (value: string) => U;

const fn: T = <U>(regex: RegExp) => (keys) => (value) => {
    const match = value.match(regex);
    if (match === null)
        throw new Error(
            'Cannot regex-explode string as no pattern ' +
                `was matched ('${value}' not matched by ${regex})`
        );
    if (match.length - 1 !== keys.length)
        throw new Error(
            'Cannot regex-explode string as there was a ' +
                'mismatch in the number of capture groups ' +
                `expected (${match.length - 1} capture ` +
                `groups in ${regex} does not match provided ` +
                `keys [${keys.join(', ')}])`
        );
    const output: Record<string, string> = {};
    keys.forEach((key, index) => {
        output[key] = match[index + 1];
    });
    return (output as unknown) as U;
};

export default fn;
