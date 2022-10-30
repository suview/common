/**
 * This file will build an index.ts in the root
 * of the src directory as well as an index.ts
 * in the root of each module. It will also
 * update package.json with the entry point and
 * types for each module.
 *
 * This process is performed during continuous
 * integration or for debug purposes. Please do
 * not commit the changes created by this script.
 */

import { readdir, writeFile } from 'fs/promises';
import fromKebabCase from './src/string/from-kebab-case';
import toCamelCase from './src/string/to-camel-case';
import match from './src/regex/match';
import matches from './src/regex/matches';
import packageJson from './package.json';

const warning = '// This file was auto-generated. Please do not submit it to version control\n\n';

(async () => {
    const rootFiles = await readdir('src', { withFileTypes: true });
    const moduleNames = rootFiles.filter(file => file.isDirectory()).map(file => file.name);

    await Promise.all(moduleNames.map(async moduleName => {
        const moduleFiles = await readdir(`src/${moduleName}`, { withFileTypes: true });
        const functionNames = moduleFiles
            .filter(file => file.isFile())
            .filter(file => file.name !== 'index.ts')
            .filter(file => matches (/\.spec.ts$/) (file.name) === false)
            .map(file => match (/[^.]+/) (file.name) [0]!);

        const moduleIndexImports = functionNames.map(functionName => {
            const camelCase = toCamelCase(fromKebabCase(functionName));
            return `export { default as ${camelCase} } from './${functionName}';`;
        });

        return writeFile(
            `src/${moduleName}/index.ts`,
            warning + moduleIndexImports.join('\n') + '\n'
        );
    }));

    const rootIndexImports = moduleNames.map(moduleName => {
        const camelCase = toCamelCase(fromKebabCase(moduleName));
        return `export * as ${camelCase} from './${moduleName}';`;
    });

    await writeFile(
        'src/index.ts',
        warning + rootIndexImports.join('\n') + '\n'
    );

    const packageJsonExports: Record<string, {}> = {
        '.': {
            require: './build/cjs/index.js',
            import: './build/esm/index.js'
        }
    };

    const packageJsonTypesVersions: Record<'*', Record<string, {}>> = {
        '*': {
            '*': [
                'build/types/index.d.ts'
            ]
        }
    };

    moduleNames.forEach(moduleName => {
        packageJsonExports[`./${moduleName}`] = {
            require: `./build/cjs/${moduleName}/index.js`,
            import: `./build/esm/${moduleName}/index.js`
        };

        packageJsonTypesVersions['*'][moduleName] = [
            `build/types/${moduleName}/index.d.ts`
        ];
    });

    const newPackageJson = {
        '//': 'This version of this file is auto-generated. Please do not submit these changes to version control',
        ...(packageJson as Omit<typeof packageJson, '//'>),
        exports: packageJsonExports,
        typesVersions: packageJsonTypesVersions
    };

    await writeFile(
        'package.json',
        JSON.stringify(newPackageJson, null, 4) + '\n'
    );

    console.log('✅ Built successfully');
})();
