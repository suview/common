import clone from './clone';

describe('object/clone', () => {
    it('creates a duplicate object', () => {
        const original = { a: 'A', b: 'B' };

        expect(clone (original)).toEqual(original);
        expect(clone (original)).not.toBe(original);
    });

    it('clones child objects', () => {
        const child = { child: true };
        const parent = { parent: true, child };

        expect((clone (parent)).child).not.toBe(child);
    });
});
