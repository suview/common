import { writeFile } from 'fs/promises';
import packageJson from './package.json';

(async () => {
    const version = process.argv[2];

    if (!version) {
        console.error('🟥 Please provide a build number');
        return;
    }

    const newPackageJson = {
        name: packageJson.name,
        version,
        ...(packageJson as Omit<typeof packageJson, 'version' | 'name'>),
    };

    newPackageJson.version = version;

    await writeFile(
        'package.json',
        JSON.stringify(newPackageJson, null, 4) + '\n'
    );

    console.log('✅ Updated version successfully');
})();