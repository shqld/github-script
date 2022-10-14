/// <reference types="node" resolution-mode="require"/>
/// <reference types="zx/globals" resolution-mode="require"/>

require('sucrase/register')
require('zx/globals')

require('require-in-the-middle')(
    ['@shqld/github-script'],
    { internals: true },
    (_exports, _name, _basedir) => {
        return { main }
    }
)

function main(func: Function) {
    return (args: unknown) => func(args)
}
