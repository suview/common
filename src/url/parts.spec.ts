import parts from './parts';

describe('url/parts', () => {
    it('converts URL string to object', () => {
        const url = 'example.com';
        const expectedObject = {
            domain: 'example',
            topLevelDomain: 'com',
        };

        expect(parts(url)).toEqual(expectedObject);
    });

    // it('identifies protocol', () => {
    //     expect(parts('http://example.com').protocol).toEqual('http');
    //     expect(parts('https://example.com').protocol).toEqual('https');
    // });

    // it('identifies domain', () => {
    //     expect(parts('example.com').domain).toEqual('example');
    //     expect(parts('subdomain.example.com').domain).toEqual('subdomain.example');
    // });

    // it('identifies top level domain', () => {
    //     expect(parts('example.com').topLevelDomain).toEqual('com');
    //     expect(parts('example.org').topLevelDomain).toEqual('org');
    // });

    // it('identifies port', () => {
    //     expect(parts('example.com:80').port).toEqual(80);
    //     expect(parts('example.org:12345').port).toEqual(12345);
    // });

    // it('identifies path', () => {
    //     expect(parts('example.com/example').path).toEqual('/example');
    //     expect(parts('example.org/example?key=value').path).toEqual('/example?key=value');
    //     expect(parts('example.org#example').path).toEqual('#example');
    // });
});
