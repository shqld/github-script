import { createArgs } from '../../src/local'

export async function run(scriptPath: string) {
    require('../../src/ci')

    const script = require(scriptPath)
    const func = script.default

    if (typeof func === 'function') {
        const args = await createArgs()

        const result = await func(args)

        return result
    }
}
