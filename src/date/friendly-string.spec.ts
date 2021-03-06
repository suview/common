import friendlyString from './friendly-string';

describe('string/friendly-string', () => {
    it('will format date as string', () => {
        const date = new Date('2020-10-30T17:25:57.192Z');

        expect(friendlyString(date)).toEqual('30th October 2020');
    });
});
