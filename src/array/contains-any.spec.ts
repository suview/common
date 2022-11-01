import containsAny from './contains-any';

describe('array/containsAny', () => {
    it('returns true if single value matches target', () => {
        const target = 3;
        const values = [3];

        expect(containsAny (target) (values)).toEqual(true);
    });

    it('returns false if single value does not match target', () => {
        const target = 3;
        const values = [4];

        expect(containsAny (target) (values)).toEqual(false);
    });

    it('returns true if all values match target', () => {
        const target = 3;
        const values = [3, 3, 3, 3];

        expect(containsAny (target) (values)).toEqual(true);
    });

    it('returns false if all values do not match target', () => {
        const target = 3;
        const values = [1, 2, 4, 5];

        expect(containsAny (target) (values)).toEqual(false);
    });

    it('returns true if any value matches target', () => {
        const target = 3;
        const values = [1, 2, 3, 4, 5];

        expect(containsAny (target) (values)).toEqual(true);
    });
});
