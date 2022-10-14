/// <reference types="node" resolution-mode="require"/>
/// <reference types="zx/globals" resolution-mode="require"/>

declare const __original_require__: typeof require

require('sucrase/register')
require('zx/globals')

Object.assign(global, {
    __original_require__: __hooked_original_require__,
})

function __hooked_original_require__(module: string) {
    if (
        module === '@shqld/github-script' ||
        module.startsWith('@shqld/github-script/')
    ) {
        return { main }
    }

    return __original_require__(module)
}

function main(func: Function) {
    return (arg: unknown) => func(arg)
}

// const original = Object.freeze({
//     require,
//     __original_require__,
// })

// Object.assign(global, {
//     require,
//     __original_require__,
// })

// // @ts-ignore
// function require(moduleName, ...args) {
//     if (moduleName === '@shqld/github-script') {
//         return main
//     }

//     // @ts-ignore
//     return original.require(moduleName, ...args)
// }

// // @ts-ignore
// function __original_require__(moduleName, ...args) {
//     if (moduleName === '@shqld/github-script') {
//         return main
//     }

//     // @ts-ignore
//     return original.__original_require__(moduleName, ...args)
// }
