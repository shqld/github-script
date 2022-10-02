import { ok } from 'node:assert/strict'
import { main } from '../../src'

export default main(
    ({
        github,
        context,
        core,
        exec,
        glob,
        io,
        require,
        __original_require__,

        ...args
    }) => {
        ok(isObject(github))
        ok(isObject(context))
        ok(isObject(core))
        ok(isObject(exec))
        ok(isObject(glob))
        ok(isObject(io))
        ok(typeof require === 'function')
        ok(typeof __original_require__ === 'function')

        ok(Object.keys(args).length === 0)
    }
)

function isObject(obj: unknown) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}
