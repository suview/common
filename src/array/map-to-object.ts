/**
 *
 */

type T = <A, B>(callback: (entry: A, index: number, list: A[]) => { key: string, value: B }) => (list: A[]) => Record<string, B>;

const f: T = callback => arr => {
    const obj: Record<string, ReturnType<typeof callback>['value']> = {};
    arr.forEach((entry, index) => {
        const keyValue = callback(entry, index, arr);
        if (obj[keyValue.key] !== undefined) {
            throw new Error(`Duplicate key '${keyValue.key}' found whilst mapping array to object`);
        }
        obj[keyValue.key] = keyValue.value;
    });
    return obj;
};

export default f;
