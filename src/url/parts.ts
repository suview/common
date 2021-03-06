/**
 *
 */

import Parts from './type/parts';
// import pipe from '../core/pipe';
// import explode from '../regex/explode';
// import parseInt from '../number/parse-int';

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
