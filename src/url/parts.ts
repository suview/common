/**
 *
 */

import Parts from './type/parts';
// import { pipe } from 'core';
// import { explode } from 'regex';
// import { parseInt } from 'number';

type T = (url: string) => Parts;

const f: T = () => ({
    domain: 'example',
    topLevelDomain: 'com',
});

// const f: T = pipe(
//     explode(
//         [
//             'protocol',
//             'domain'
//             'topLevelDomain',
//             'port',
//             'path'
//         ],
//         /^\s*(?:(https?):\/\/)?([-a-zA-Z0-9@%._\+~#=]{2,256})\.([a-z]{2,4})(?::([0-9]{1,5}))?\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\s*$/
//     ),
//     alter({ port: parseInt })
// );

export default f;
