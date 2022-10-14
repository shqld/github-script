/// <reference types="node" resolution-mode="require"/>
/// <reference types="zx/globals" resolution-mode="require"/>

require('sucrase/register')
require('zx/globals')

const { Hook } = require('require-in-the-middle')

console.log({ Hook })

Hook(
    ['@shqld/github-script'],
    { internals: true },
    (_exports, _name, _basedir) => {
        return { main }
    }
)

function main(func: Function) {
    return (arg: unknown) => func(arg)
}
