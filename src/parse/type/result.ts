import Position from './position';

interface Result<T> {
    match?: T;
    expected?: string | string[];
    position: Position;
}

export default Result;
