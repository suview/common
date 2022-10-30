import esbuild  from 'esbuild';
import glob from 'tiny-glob';

(async () => {
    const entryPoints = await glob('./src/**/index.ts');

    const commonSettings = {
        entryPoints,
        bundle: true,
        sourcemap: true
    };

    const esModulesPromise = esbuild.build({
        ...commonSettings,
        format: 'esm',
        outdir: 'build/esm'
    });
    

    const commonJsPromise = esbuild.build({
        ...commonSettings,
        format: 'cjs',
        outdir: 'build/cjs'
    });

    await Promise.all([esModulesPromise, commonJsPromise]);

    console.log('✅ Built successfully');
})();
