import 'sucrase/register'
// @ts-ignore
import 'zx/globals'

Object.assign(global, {
    main,
})

function main(func) {
    return (arg) => func(arg)
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
