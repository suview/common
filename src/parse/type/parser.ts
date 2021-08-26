import Result from './result';

type Parser<T> = (source: string, cursor: number) => Result<T>;

export default Parser;
