/// <reference types="node" resolution-mode="require"/>
/// <reference types="zx/globals" resolution-mode="require"/>

require('sucrase/register')
require('zx/globals')

// import type { context, getOctokit } from '@actions/github'
// import type * as core from '@actions/core'
// import type * as glob from '@actions/glob'
// import type * as io from '@actions/io'
// import type * as exec from '@actions/exec'

const { context, getOctokit } =
    require('@actions/github') as typeof import('@actions/github')
const core = require('@actions/core') as typeof import('@actions/core')
const glob = require('@actions/glob') as typeof import('@actions/glob')
const io = require('@actions/io') as typeof import('@actions/io')
const exec = require('@actions/exec') as typeof import('@actions/exec')

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
