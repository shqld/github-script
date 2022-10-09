/// <reference types="node" resolution-mode="require"/>
/// <reference types="zx/globals" resolution-mode="require"/>

require('sucrase/register')
require('zx/globals')

import { context, getOctokit } from '@actions/github'
import * as core from '@actions/core'
import * as glob from '@actions/glob'
import * as io from '@actions/io'
import * as exec from '@actions/exec'

export interface Arg {
    github: ReturnType<typeof getOctokit>
    context: typeof context
    core: typeof core
    glob: typeof glob
    io: typeof io
    exec: typeof exec
    require: typeof require
    __original_require__: typeof require
}

export type MainFunc = (arg: Arg) => unknown | void | Promise<unknown | void>

export async function main(func: MainFunc) {
    func({
        github: getOctokit(await getAuthToken()),
        context,
        core,
        glob,
        io,
        exec,
        require,
        __original_require__: require,
    })
}

async function getAuthToken() {
    $.verbose = false

    const { stderr } = await $`gh auth status --show-token`

    const [, token] = stderr.match(/Token: (.+)/) ?? []

    return token
}
