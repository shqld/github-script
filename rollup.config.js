import { defineConfig } from 'rollup'

import pluginNodeResolve from '@rollup/plugin-node-resolve'
// import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginTypescript from '@rollup/plugin-typescript'
// import { babel as pluginBabel } from '@rollup/plugin-babel'
// import { terser as pluginTerser } from 'rollup-plugin-terser'

import * as path from 'path'

const config = defineConfig([
    // {
    //     input: 'src/index.ts',
    //     output: [
    //         {
    //             // file: pkg.module,
    //             format: 'es',
    //             sourcemap: 'inline',
    //             exports: 'named',
    //         },
    //     ],
    //     // external: [
    //     //     ...Object.keys(pkg.dependencies || {}),
    //     //     ...Object.keys(pkg.devDependencies || {}),
    //     // ],
    //     plugins: [
    //         pluginTypescript(),
    //         // pluginBabel({
    //         //     babelHelpers: 'bundled',
    //         //     configFile: path.resolve(__dirname, '.babelrc.js'),
    //         // }),
    //     ],
    // },
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/local.js',
                format: 'cjs',
                sourcemap: 'inline',
            },
        ],
        // external: [
        //     ...Object.keys(pkg.dependencies || {}),
        //     ...Object.keys(pkg.devDependencies || {}),
        // ],
        plugins: [
            pluginTypescript(),
            // pluginBabel({
            //     babelHelpers: 'bundled',
            //     configFile: path.resolve(__dirname, '.babelrc.js'),
            // }),
        ],
    },
])

export default config
