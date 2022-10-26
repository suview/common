import add from './add';

describe('math/add', () => {
    it('adds two numbers', () => {
        expect(add (1) (2)).toEqual(3);
    });
});
