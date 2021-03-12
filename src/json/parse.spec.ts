import parse from './parse';

describe('json/parse', () => {
    it('parses valid JSON', () => {
        expect(parse('{"key":"value"}')).toEqual({ key: 'value' });
    });
});
