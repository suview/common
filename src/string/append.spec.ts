import append from './append';

describe('string/append', () => {
    it('concatenates suffix to the end of a string', () => {
        expect(append ('ing') ('append')).toEqual('appending');
    });
});
