/// <reference types="node" resolution-mode="require"/>
/// <reference types="zx/globals" resolution-mode="require"/>

require('sucrase/register')
require('zx/globals')

const __original_module_require__ = require

function __hooked_module_require__(moduleName: string) {
    if (moduleName === '@shqld/github-script') {
        return { main }
    }

    __original_module_require__(moduleName)
}

Object.assign(__hooked_module_require__, require)

module.require = __hooked_module_require__ as typeof require

function main(func: Function) {
    return (args: unknown) => func(args)
}
